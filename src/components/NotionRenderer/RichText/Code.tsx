/* eslint-disable react/no-array-index-key */
import { css, useTheme } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";
import type { NestedRichTextItem } from ".";

import Anchor from "./Anchor";
import Span from "./Span";

interface Props {
  nestedRichTextItem: NestedRichTextItem;
}

const codeText = (theme: Theme) => css`
  padding: 2px 4px;
  background: ${theme.codeBg};
  color: ${theme.code};
  border-radius: 4px;
`;

const Code = ({ nestedRichTextItem }: Props) => {
  const theme = useTheme();

  return (
    <code css={() => codeText(theme)}>
      {(() => {
        if ("richText" in nestedRichTextItem) {
          return nestedRichTextItem.richText.map((item, index) => {
            if ("groupType" in item && item.groupType === "link") {
              return <Anchor key={index} nestedRichTextItem={item} />;
            }

            if ("plain_text" in item) {
              return <Span key={index} richTextItem={item} />;
            }

            return null;
          });
        }

        if ("href" in nestedRichTextItem && nestedRichTextItem.href) {
          return <Anchor nestedRichTextItem={nestedRichTextItem} />;
        }

        return nestedRichTextItem.plain_text;
      })()}
    </code>
  );
};

export default Code;
