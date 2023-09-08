import Head from "next/head";
import Link from "next/link";
import dayjs from "dayjs";
import { css, useTheme } from "@emotion/react";
import { useEffect } from "react";

// types
import type { GetStaticProps } from "next";
import type { APIPostListResponse } from "@types";
import type { Theme } from "@emotion/react";

// services
import notionServices from "services/notion";

interface Props {
  postList?: APIPostListResponse;
  isError?: boolean;
}

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

const postTitle = (theme: Theme) => css`
  color: ${theme.postTitle};
`;

const postDate = (theme: Theme) => css`
  color: ${theme.postDate};
  font-size: 0.8rem;
`;

const PostDetail = ({ postList, isError }: Props) => {
  const theme = useTheme();

  useEffect(() => {
    if (isError) {
      alert("에러가 발생했습니다.");
    }
  }, [isError]);

  if (!postList) {
    return null;
  }

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
          {postList.map((item) => (
            <Link key={item.id} css={postItemBox} href={`/${item.id}`}>
              <span css={postTitle(theme)}>{item.title}</span>
              <span css={postDate(theme)}>
                {dayjs(item.createdAt).format("YYYY-MM-DD")}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  try {
    const data = await notionServices.getList();

    return {
      props: {
        postList: data,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: { isError: true },
      revalidate: 60,
    };
  }
};

export default PostDetail;
