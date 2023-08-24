import { Fragment } from "react";
import { css, useTheme } from "@emotion/react";

// types
import type {
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { SerializedStyles, Theme } from "@emotion/react";

interface Props {
  block: ParagraphBlockObjectResponse;
}

interface BlockComponentProps {
  css?: SerializedStyles;
  href?: string;
}

const box = (theme: Theme) => css`
  margin-bottom: 4px;
  color: ${theme.text};
  font-size: 1rem;
`;
const spanText = (theme: Theme, blockComponent: RichTextItemResponse) => css`
  font-style: ${blockComponent.annotations.italic ? "italic" : "normal"};
  font-weight: ${blockComponent.annotations.bold ? "bold" : "normal"};
  text-decoration: ${(() => {
    if (blockComponent.annotations.underline) {
      return "underline";
    }
    if (blockComponent.annotations.strikethrough) {
      return "line-through";
    }
    return "unset";
  })()};
`;
const codeText = (theme: Theme, blockComponent: RichTextItemResponse) => css`
  padding: 1px 4px;
  background: ${theme.codeBg};
  color: ${theme.code};
  border-radius: 4px;
`;
const linkText = (theme: Theme, blockComponent: RichTextItemResponse) => css`
  color: ${theme.link};
  border-bottom: 1px solid ${theme.link};

  &:hover {
    color: ${theme.linkHover};
    border-bottom-color: ${theme.linkHover};
  }
`;

const Paragraph = ({ block }: Props) => {
  const theme = useTheme();

  return (
    <p css={box(theme)}>
      {block.paragraph.rich_text.map((blockComponent, blockComponentIndex) => {
        const blockComponentProps: BlockComponentProps = {};
        const WrapperTag = (() => {
          if (
            blockComponent.annotations.bold ||
            blockComponent.annotations.italic ||
            blockComponent.annotations.strikethrough ||
            blockComponent.annotations.underline
          ) {
            blockComponentProps.css = spanText(theme, blockComponent);
            return "span";
          }
          if (blockComponent.annotations.code) {
            blockComponentProps.css = codeText(theme, blockComponent);
            return "code";
          }
          if (blockComponent.href) {
            blockComponentProps.css = linkText(theme, blockComponent);
            blockComponentProps.href = blockComponent.href;
            return "a";
          }
          return Fragment;
        })();

        return (
          <WrapperTag
            // eslint-disable-next-line react/no-array-index-key
            key={blockComponentIndex}
            {...blockComponentProps}
          >
            {blockComponent.plain_text}
          </WrapperTag>
        );
      })}
    </p>
  );
};

export default Paragraph;
