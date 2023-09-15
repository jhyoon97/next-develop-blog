/* eslint-disable react/no-array-index-key */
import { css, useTheme } from "@emotion/react";

// utils
import typeGuards from "utils/typeGuards";

// types
import type { Theme } from "@emotion/react";
import type { ProcessedRichTextItem } from "types/notion";

import Span from "./Span";

interface Props {
  processedRichTextItem: ProcessedRichTextItem;
}

const anchorText = (theme: Theme) => css`
  color: ${theme.link};
  border-bottom: 1px solid ${theme.link};
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const Anchor = ({ processedRichTextItem }: Props) => {
  const theme = useTheme();

  return (
    <a
      css={() => anchorText(theme)}
      href={(() => {
        if (
          typeGuards.isRichTextItemResponse(processedRichTextItem) &&
          processedRichTextItem.href
        ) {
          return processedRichTextItem.href;
        }

        if (
          typeGuards.isRichTextGroup(processedRichTextItem) &&
          typeGuards.isRichTextItemResponse(
            processedRichTextItem.richText[0]
          ) &&
          processedRichTextItem.richText[0].href
        ) {
          return processedRichTextItem.richText[0].href;
        }

        return "#";
      })()}
      target="_blank"
      rel="noreferrer"
    >
      {(() => {
        if (typeGuards.isRichTextGroup(processedRichTextItem)) {
          return processedRichTextItem.richText.map((item, index) => {
            if (typeGuards.isRichTextItemResponse(item)) {
              return <Span key={index} richTextItem={item} />;
            }

            return null;
          });
        }

        return processedRichTextItem.plain_text;
      })()}
    </a>
  );
};

export default Anchor;
