import Head from "next/head";
import { css } from "@emotion/react";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

// components
import NotionRenderer from "components/NotionRenderer";
import TableOfContents from "components/TableOfContents";

// services
import notionServices from "services/notion";

// types
import type { GetStaticPaths, GetStaticProps } from "next";
import type { APIPostResponse } from "types/api-route";
import type { Theme } from "@emotion/react";

interface Props {
  pageData?: APIPostResponse;
  isError?: boolean;
}

interface Params {
  [key: string]: string;
  postId: string;
}

const box = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const titleBox = css``;

const title = css`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`;

const contentsBox = css`
  display: flex;
  flex-direction: row;
  width: calc(100% - 300px);
`;

const tableOfContentsBox = css`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
`;

const tableOfContentsFixedBox = css`
  position: fixed;
  padding-left: 1rem;
  width: 300px;
`;

const createdAt = (theme: Theme) => css`
  margin-bottom: 2rem;
  color: ${theme.subText};
  font-size: 1rem;
  display: block;
`;

const PostDetail = ({ pageData, isError }: Props) => {
  const contentsBoxRef = useRef<HTMLDivElement>(null);
  const [tableOfContentsTop, setTableOfContentsTop] = useState<
    undefined | number
  >(undefined);

  useLayoutEffect(() => {
    setTableOfContentsTop(contentsBoxRef.current?.offsetTop);
  }, []);

  useEffect(() => {
    if (isError) {
      alert("페이지가 존재하지 않습니다.");
    }
  }, [isError]);

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

      <article css={box}>
        <div css={titleBox}>
          <h2 css={title}>{pageData.title}</h2>
          <time css={createdAt}>{pageData.createdAt}</time>
        </div>

        <div ref={contentsBoxRef} css={contentsBox}>
          <NotionRenderer blocks={pageData.blocks} />
        </div>

        {tableOfContentsTop !== undefined && (
          <div
            css={tableOfContentsBox}
            style={{
              top: tableOfContentsTop,
            }}
          >
            <div css={tableOfContentsFixedBox}>
              <TableOfContents blocks={pageData.blocks} />
            </div>
          </div>
        )}
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const response = await notionServices.getList();

  return {
    paths: response.map((item) => ({
      params: { postId: item.id },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  try {
    if (params?.postId) {
      const pageData = await notionServices.getPage(params.postId);

      return {
        props: { pageData },
        revalidate: 3500,
      };
    }

    return {
      props: {
        isError: true,
      },
    };
  } catch (err) {
    return {
      props: { isError: true },
    };
  }
};

export default PostDetail;
