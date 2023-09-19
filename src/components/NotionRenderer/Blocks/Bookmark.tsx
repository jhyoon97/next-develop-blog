import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "axios";

// components
import LoadingIndicator from "components/LoadingIndicator";

// types
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { MetaData } from "metadata-scraper";
import type { Theme } from "@emotion/react";

import RichText from "../common/components/RichText";
import Caption from "../common/components/Caption";
import { commonBox } from "../common/styles";

interface Props {
  block: BookmarkBlockObjectResponse;
}

const bookmarkStyles = {
  box: (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
    width: 100%;
    border-radius: 3px;
    border: 1px solid ${theme.boxBorder};

    &:hover {
      background: ${theme.hoverBackground};
    }
  `,
  textBox: css`
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.9rem;
    overflow: hidden;
  `,
  textBoxHeader: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
  `,
  title: css`
    width: 100%;
    margin-bottom: 0.3rem;
    font-size: 1rem;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  description: (theme: Theme) => css`
    font-size: 0.875rem;
    color: ${theme.subText};
  `,
  urlRow: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
  `,
  icon: css`
    margin-right: 6px;
    width: 16px;
    height: 16px;
  `,
  url: css`
    flex: 1;
    font-size: 0.75rem;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  thumbnailBox: css`
    flex: 1;
    position: relative;
  `,
  thumbnail: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
};

const Bookmark = ({ block }: Props) => {
  const [loading, setLoading] = useState<"LOADING" | "SUCCESS" | "FAILURE">(
    "LOADING"
  );
  const [thumbnailError, setThumbnailError] = useState(false);
  const [iconError, setIconError] = useState(false);
  const [metadata, setMetadata] = useState<MetaData>({});

  const fetchMetadata = async () => {
    try {
      const { data } = await axios.get<MetaData>(
        `/api/metadata?url=${block.bookmark.url}`
      );

      setMetadata(data);
      setLoading("SUCCESS");
    } catch (err) {
      setLoading("FAILURE");
      console.log(err);
    }
  };

  useEffect(() => {
    if (block.bookmark.url) {
      fetchMetadata();
    }
  }, [block]);

  if (loading === "LOADING") {
    return <LoadingIndicator />;
  }
  if (loading === "FAILURE") {
    return (
      <>
        <div
          css={css`
            margin-bottom: 0.5rem;
          `}
        >
          <RichText
            richText={[
              {
                type: "text",
                href: block.bookmark.url,
                plain_text: block.bookmark.url,
                text: {
                  content: block.bookmark.url,
                  link: {
                    url: block.bookmark.url,
                  },
                },
                annotations: {
                  color: "default",
                  bold: false,
                  code: false,
                  italic: false,
                  strikethrough: false,
                  underline: false,
                },
              },
            ]}
          />
        </div>
        {block.bookmark.caption.length > 0 && (
          <Caption richText={block.bookmark.caption} />
        )}
      </>
    );
  }
  return (
    <div css={commonBox}>
      <a
        css={bookmarkStyles.box}
        href={block.bookmark.url}
        target="_blank"
        rel="noreferrer"
      >
        <div css={bookmarkStyles.textBox}>
          <div css={bookmarkStyles.textBoxHeader}>
            <span css={bookmarkStyles.title}>{metadata.title}</span>
            {metadata.description && (
              <span css={bookmarkStyles.description}>
                {metadata.description}
              </span>
            )}
          </div>
          <div css={bookmarkStyles.urlRow}>
            {metadata.icon && !thumbnailError && (
              <img
                onError={() => setThumbnailError(true)}
                css={bookmarkStyles.icon}
                src={metadata.icon}
                loading="lazy"
                alt=""
              />
            )}
            <span css={bookmarkStyles.url}>{block.bookmark.url}</span>
          </div>
        </div>
        {metadata.image && !iconError && (
          <div css={bookmarkStyles.thumbnailBox}>
            <img
              onError={() => setIconError(true)}
              css={bookmarkStyles.thumbnail}
              src={metadata.image}
              loading="lazy"
              alt=""
            />
          </div>
        )}
      </a>
      {block.bookmark.caption.length > 0 && (
        <Caption richText={block.bookmark.caption} />
      )}
    </div>
  );
};

export default Bookmark;
