import Head from "next/head";

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
  if (!pageData) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name="description" content="jhdev 개발 블로그" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NotionRenderer blocks={pageData.blocks} />
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
  try {
    if (params?.postId) {
      const pageData = await notionServices.getPage(params.postId as string);

      return {
        props: { pageData },
        revalidate: 3500,
      };
    }

    return {
      props: {},
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default PostDetail;
