import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { NotionRenderer } from "react-notion-x";
import { getPageTitle, getPageImageUrls } from "notion-utils";
import { Code } from "react-notion-x/build/third-party/code";

// types
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ExtendedRecordMap } from "notion-types";
import type { APIPostListResponse } from "@types";

// components
import ImageListValidate from "components/ImageListValidate";

// utils
import { getList, getPage } from "utils/notion";

interface Props {
  title: string;
  initialPageData: ExtendedRecordMap;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getList();

  return {
    paths: (data as APIPostListResponse).map((item) => ({
      params: { postId: item.id },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getPage(params?.postId);
  const title = getPageTitle(data);

  return {
    props: {
      title,
      initialPageData: data,
    },
    revalidate: 3500,
  };
};

const PostDetail = ({ title, initialPageData }: Props) => {
  const router = useRouter();
  const { postId } = router.query;
  const pageQuery = useQuery(
    ["post", postId],
    async () => {
      const { data } = await axios.get(`/api/post/${postId}`);

      return data;
    },
    {
      initialData: initialPageData,
      enabled: false,
    }
  );
  const expiredImageFlag = useRef(false);
  const [imagesForValidate, setImagesForValidate] = useState<string[]>([]);

  useEffect(() => {
    if (pageQuery.data) {
      setImagesForValidate(
        getPageImageUrls(pageQuery.data, { mapImageUrl: (url: string) => url })
      );
    }
  }, [pageQuery.data]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="jhdev 개발 블로그" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ImageListValidate
          onError={() => {
            if (!expiredImageFlag.current) {
              pageQuery.refetch();
              expiredImageFlag.current = true;
            }
          }}
          images={imagesForValidate}
        />

        <NotionRenderer recordMap={pageQuery.data} components={{ Code }} />
      </div>
    </>
  );
};

export default PostDetail;
