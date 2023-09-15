/* eslint-disable react/no-array-index-key */
import { css, useTheme } from "@emotion/react";

// utils
import typeGuards from "utils/typeGuards";

// types
import type { Theme } from "@emotion/react";
import type { ProcessedRichTextItem } from "types/notion";

import Anchor from "./Anchor";
import Span from "./Span";

interface Props {
  processedRichTextItem: ProcessedRichTextItem;
}

const codeText = (theme: Theme) => css`
  padding: 0px 4px;
  background: ${theme.codeBg};
  color: ${theme.code};
  border-radius: 4px;
`;

const Code = ({ processedRichTextItem }: Props) => {
  const theme = useTheme();

  return (
    <code css={() => codeText(theme)}>
      {(() => {
        if (typeGuards.isRichTextGroup(processedRichTextItem)) {
          return processedRichTextItem.richText.map((item, index) => {
            if (typeGuards.isRichTextGroup(item) && item.groupType === "link") {
              return <Anchor key={index} processedRichTextItem={item} />;
            }

            if (typeGuards.isRichTextItemResponse(item)) {
              return <Span key={index} richTextItem={item} />;
            }

            return null;
          });
        }

        if (
          typeGuards.isRichTextItemResponse(processedRichTextItem) &&
          processedRichTextItem.href
        ) {
          return <Anchor processedRichTextItem={processedRichTextItem} />;
        }

        return processedRichTextItem.plain_text;
      })()}
    </code>
  );
};

export default Code;
