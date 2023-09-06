import { css, useTheme } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { HasChildrenBulletedList } from "@types";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  blocks: Array<BulletedListItemBlockObjectResponse | HasChildrenBulletedList>;
  depth: number;
}

const listBox = (depth: number) => css`
  width: 100%;
  list-style-type: ${(() => {
    switch (depth % 3) {
      case 1:
        return "disc";
      case 2:
        return "circle";
      case 0:
        return "square";
      default:
        return "disc";
    }
  })()};
`;

const listItem = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  width: 100%;
  color: ${theme.text};
  font-size: 1rem;
`;

const BulletedList = ({ blocks, depth }: Props) => {
  const theme = useTheme();

  return (
    <ul css={listBox(depth)}>
      {blocks.map((item) => (
        <>
          <li css={listItem(theme)}>
            <RichText richText={item.bulleted_list_item.rich_text} />
          </li>
          {"children" in item.bulleted_list_item && (
            <NotionRenderer
              blocks={item.bulleted_list_item.children}
              depth={depth + 1}
            />
          )}
        </>
      ))}
    </ul>
  );
};

export default BulletedList;
