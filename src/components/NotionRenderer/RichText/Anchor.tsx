/* eslint-disable react/no-array-index-key */
import { css, useTheme } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";
import type { NestedRichTextItem } from ".";

import Span from "./Span";

interface Props {
  nestedRichTextItem: NestedRichTextItem;
}

const anchorText = (theme: Theme) => css`
  color: ${theme.link};
  border-bottom: 1px solid ${theme.link};

  &:hover {
    color: ${theme.linkHover};
    border-bottom-color: ${theme.linkHover};
  }
`;

const Anchor = ({ nestedRichTextItem }: Props) => {
  const theme = useTheme();

  return (
    <a
      css={() => anchorText(theme)}
      href={(() => {
        if ("href" in nestedRichTextItem && nestedRichTextItem.href) {
          return nestedRichTextItem.href;
        }

        if (
          "groupType" in nestedRichTextItem &&
          "href" in nestedRichTextItem.richText[0] &&
          nestedRichTextItem.richText[0].href
        ) {
          return nestedRichTextItem.richText[0].href;
        }

        return "#";
      })()}
      target="_blank"
      rel="noreferrer"
    >
      {(() => {
        if ("richText" in nestedRichTextItem) {
          return nestedRichTextItem.richText.map((item, index) => {
            if ("plain_text" in item) {
              return <Span key={index} richTextItem={item} />;
            }

            return null;
          });
        }

        return nestedRichTextItem.plain_text;
      })()}
    </a>
  );
};

export default Anchor;
