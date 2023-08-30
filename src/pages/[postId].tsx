import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

// types
import type { GetStaticPaths, GetStaticProps } from "next";
import type { APIPostResponse } from "@types";

// components
import NotionRenderer from "components/NotionRenderer";

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
  const resourceErrorFlag = useRef(false);

  if (!pageQuery.data) {
    return null;
  }
  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="jhdev 개발 블로그" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <NotionRenderer
          blocks={pageQuery.data.blocks}
          onResourceError={() => {
            if (!resourceErrorFlag.current) {
              // 이미지 로드 오류 발생 시 1회에 한하여 페이지데이터 재호출
              pageQuery.refetch();
              resourceErrorFlag.current = true;
            }
          }}
        />
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
