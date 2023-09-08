import React from "react";
import { css, useTheme } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { HasChildrenBulletedList } from "@types";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  blocks: Array<HasChildrenBulletedList>;
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
        <React.Fragment key={item.id}>
          <li css={listItem(theme)}>
            <RichText richText={item.bulleted_list_item.rich_text} />
          </li>
          {item.bulleted_list_item.children && (
            <NotionRenderer
              blocks={item.bulleted_list_item.children}
              depth={depth + 1}
            />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default BulletedList;
