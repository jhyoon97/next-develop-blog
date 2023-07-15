import { Fragment } from "react";
import { css } from "@emotion/react";

// types
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { SerializedStyles } from "@emotion/react";

interface Props {
  block: ParagraphBlockObjectResponse;
}

interface BlockComponentProps {
  css?: SerializedStyles;
}

const box = css`
  margin-bottom: 4px;
`;
const spanText = css``;
const codeText = css``;
const linkText = css``;

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
            blockComponentProps.css = spanText;
            return "span";
          }
          if (blockComponent.annotations.code) {
            blockComponentProps.css = codeText;
            return "code";
          }
          if (blockComponent.href) {
            blockComponentProps.css = linkText;
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
