import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";

// types
import type { GetStaticProps } from "next";
import type { APIPostListResponse } from "@types";

// utils
import { getList } from "utils/notion";

const postListBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  initialData: APIPostListResponse;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getList();

  return {
    props: {
      initialData: data,
    },
    revalidate: 600,
  };
};

const PostDetail = ({ initialData }: Props) => {
  return (
    <>
      <Head>
        <title>jhdev 개발 블로그</title>
        <meta name="description" content="jhdev 개발 블로그" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ul css={postListBox}>
          {initialData.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PostDetail;
