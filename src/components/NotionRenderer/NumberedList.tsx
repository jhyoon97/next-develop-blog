import { css, useTheme } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { HasChildrenNumberedList } from "@types";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  blocks: Array<NumberedListItemBlockObjectResponse | HasChildrenNumberedList>;
  depth: number;
}

const listItem = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  color: ${theme.text};
  font-size: 1rem;
`;

const BulletedList = ({ blocks, depth }: Props) => {
  const theme = useTheme();

  return (
    <ol
      type={(() => {
        switch (depth % 3) {
          case 1:
            return "1";
          case 2:
            return "a";
          case 0:
            return "i";
          default:
            return "1";
        }
      })()}
    >
      {blocks.map((item) => (
        <>
          <li css={listItem(theme)}>
            <RichText richText={item.numbered_list_item.rich_text} />
          </li>
          {"children" in item.numbered_list_item && (
            <NotionRenderer
              blocks={item.numbered_list_item.children}
              depth={depth + 1}
            />
          )}
        </>
      ))}
    </ol>
  );
};

export default BulletedList;
