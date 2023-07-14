import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import { css } from "@emotion/react";

// types
import type { GetStaticProps } from "next";
import type { APIPostListResponse } from "@types";

// services
import notionServices from "services/notion";

const postListBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const postItemBox = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 5px;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

const postTitle = css`
  color: #333;
`;

const postDate = css`
  color: #afafaf;
  font-size: 0.8rem;
`;

interface Props {
  initialData: APIPostListResponse;
}

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
            <Link key={item.id} css={postItemBox} href={`/${item.id}`}>
              <span css={postTitle}>{item.title}</span>
              <span css={postDate}>
                {dayjs(item.createdAt).format("YYYY-MM-DD")}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await notionServices.getList();

  return {
    props: {
      initialData: data,
    },
    revalidate: 600,
  };
};

export default PostDetail;
