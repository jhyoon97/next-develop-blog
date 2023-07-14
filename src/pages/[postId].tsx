import { useState, useEffect, useRef } from "react";
import { css } from "@emotion/react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

// types
import type { GetStaticPaths, GetStaticProps } from "next";
import type { APIPostListResponse, APIPostResponse } from "@types";

// components
import ImageListValidate from "components/ImageListValidate";

// services
import notionServices from "services/notion";

interface Props {
  pageData: APIPostResponse;
}

const PostDetail = ({ pageData }: Props) => {
  const router = useRouter();
  const { postId } = router.query;
  const pageQuery = useQuery(
    ["post", postId],
    async () => {
      const { data } = await axios.get(`/api/post/${postId}`);

      return data;
    },
    {
      initialData: pageData,
      enabled: false,
    }
  );
  const expiredImageFlag = useRef(false);
  const [imagesForValidate, setImagesForValidate] = useState<string[]>([]);

  console.log(
    pageData.blocks
      .map((item) => item.type)
      .reduce((acc: string[], item) => {
        return acc.includes(item) ? acc : acc.concat(item);
      }, [])
  );

  /* useEffect(() => {
    // 노션 공식 API로 변경하고 다시 구현 필요
    if (pageQuery.data) {
      setImagesForValidate(
        getPageImageUrls(pageQuery.data, { mapImageUrl: (url: string) => url })
      );
    }
  }, [pageQuery.data]); */

  return (
    <>
      <Head>
        <title>title</title>
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

        {/* 노션 공식 API blocks API로 변경하고 렌더러 직접 구현 필요 */}
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await notionServices.getList();

  return {
    paths: response.map((item) => ({
      params: { postId: item.id },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params && params.postId) {
    const pageData = await notionServices.getPage(params.postId as string);

    return {
      props: { pageData },
      revalidate: 3500,
    };
  }

  return {
    props: { error: true },
  };
};

export default PostDetail;
