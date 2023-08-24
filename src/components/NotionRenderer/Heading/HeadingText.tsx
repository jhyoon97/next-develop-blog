import { css, useTheme } from "@emotion/react";

// types
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { SerializedStyles, Theme } from "@emotion/react";

interface Props {
  richText: Array<RichTextItemResponse>;
}

const spanText = (theme: Theme, blockComponent: RichTextItemResponse) => css``;

const HeadingText = ({ richText }: Props) => {
  const theme = useTheme();

  return (
    <>
      {richText.map(
        (blockComponent: RichTextItemResponse, blockComponentIndex: number) => {
          return (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={blockComponentIndex}
              css={spanText(theme, blockComponent)}
            >
              {blockComponent.plain_text}
            </span>
          );
        }
      )}
    </>
  );
};

export default HeadingText;
