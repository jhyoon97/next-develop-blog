import { Fragment } from "react";
import { css } from "@emotion/react";

// types
import type {
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { SerializedStyles } from "@emotion/react";

interface Props {
  block: ParagraphBlockObjectResponse;
}

interface BlockComponentProps {
  css?: SerializedStyles;
  href?: string;
}

const box = css`
  margin-bottom: 4px;
`;
const spanText = (blockComponent: RichTextItemResponse) => css`
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
const codeText = (blockComponent: RichTextItemResponse) => css`
  padding: 1px 4px;
  background: hsla(44, 6%, 50%, 0.15);
  color: #eb5757;
  border-radius: 4px;
`;
const linkText = (blockComponent: RichTextItemResponse) => css`
  color: rgba(55, 53, 47, 0.6);
  border-bottom: 1px solid rgba(55, 53, 47, 0.6);

  &:hover {
    color: rgba(55, 53, 47, 0.8);
    border-bottom-color: rgba(55, 53, 47, 0.8);
  }
`;

const Paragraph = ({ block }: Props) => {
  return (
    <p css={box}>
      {block.paragraph.rich_text.map((blockComponent, blockComponentIndex) => {
        const blockComponentProps: BlockComponentProps = {};
        const TextWrapper = (() => {
          if (
            blockComponent.annotations.bold ||
            blockComponent.annotations.italic ||
            blockComponent.annotations.strikethrough ||
            blockComponent.annotations.underline
          ) {
            blockComponentProps.css = spanText(blockComponent);
            return "span";
          }
          if (blockComponent.annotations.code) {
            blockComponentProps.css = codeText(blockComponent);
            return "code";
          }
          if (blockComponent.href) {
            blockComponentProps.css = linkText(blockComponent);
            blockComponentProps.href = blockComponent.href;
            return "a";
          }
          return Fragment;
        })();

        return (
          <TextWrapper
            // eslint-disable-next-line react/no-array-index-key
            key={blockComponentIndex}
            {...blockComponentProps}
          >
            {blockComponent.plain_text}
          </TextWrapper>
        );
      })}
    </p>
  );
};

export default Paragraph;
