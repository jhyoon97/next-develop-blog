import { Fragment } from "react";
import { css, useTheme } from "@emotion/react";

// types
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { SerializedStyles, Theme } from "@emotion/react";

interface Props {
  richText: Array<RichTextItemResponse>;
}

interface RichTextItemProps {
  css?: SerializedStyles;
  href?: string;
}

const spanText = (theme: Theme, richTextItem: RichTextItemResponse) => css`
  font-style: ${richTextItem.annotations.italic ? "italic" : "inherit"};
  font-weight: ${richTextItem.annotations.bold ? "bold" : "inherit"};
  text-decoration: ${(() => {
    const decorations = [];

    if (richTextItem.annotations.underline) {
      decorations.push("underline");
    }
    if (richTextItem.annotations.strikethrough) {
      decorations.push("line-through");
    }
    return decorations.join(" ") || "unset";
  })()};
`;
const codeText = (theme: Theme, richTextItem: RichTextItemResponse) => css`
  padding: 1px 4px;
  background: ${theme.codeBg};
  color: ${theme.code};
  border-radius: 4px;
`;
const linkText = (theme: Theme, richTextItem: RichTextItemResponse) => css`
  color: ${theme.link};
  border-bottom: 1px solid ${theme.link};

  &:hover {
    color: ${theme.linkHover};
    border-bottom-color: ${theme.linkHover};
  }
`;

const RichText = ({ richText }: Props) => {
  const theme = useTheme();

  return (
    <>
      {richText.map((richTextItem, richTextIndex) => {
        const richTextItemProps: RichTextItemProps = {};
        const WrapperTag = (() => {
          if (richTextItem.annotations.code) {
            richTextItemProps.css = codeText(theme, richTextItem);
            return "code";
          }
          if (richTextItem.href) {
            richTextItemProps.css = linkText(theme, richTextItem);
            richTextItemProps.href = richTextItem.href;
            return "a";
          }
          if (
            richTextItem.annotations.bold ||
            richTextItem.annotations.italic ||
            richTextItem.annotations.strikethrough ||
            richTextItem.annotations.underline ||
            richTextItem.annotations.color !== "default"
          ) {
            richTextItemProps.css = spanText(theme, richTextItem);
            return "span";
          }
          return Fragment;
        })();

        return (
          <WrapperTag
            // eslint-disable-next-line react/no-array-index-key
            key={richTextIndex}
            {...richTextItemProps}
          >
            {richTextItem.plain_text}
          </WrapperTag>
        );
      })}
    </>
  );
};

export default RichText;
