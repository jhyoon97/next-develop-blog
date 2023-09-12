import React from "react";
import { css } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";
import RichText from "components/NotionRenderer/RichText";
import { blockBox } from "components/NotionRenderer/commonStyles";

// types
import type { HasChildrenNumberedList } from "@types";
import type { Theme } from "@emotion/react";

interface Props {
  blocks: Array<HasChildrenNumberedList>;
  depth: number;
}

const listBox = css`
  list-style: none;
  counter-reset: li;
`;

const listItem = (theme: Theme, depth: number) => {
  const type = (() => {
    switch (depth % 3) {
      case 1:
        return "decimal";
      case 2:
        return "lower-alpha";
      case 0:
        return "lower-roman";
      default:
        return "decimal";
    }
  })();

  return css`
    position: relative;
    margin-bottom: 0.25rem;
    width: 100%;
    color: ${theme.text};
    font-size: 1rem;

    &:before {
      counter-increment: li;
      content: counter(li, ${type}) ".";
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-100%);
      padding-right: 0.6rem;
    }
  `;
};

const NumberedList = ({ blocks, depth }: Props) => {
  return (
    <ol
      css={[blockBox, listBox]}
      style={{ paddingLeft: depth === 1 ? "1.5rem" : 0 }}
    >
      {blocks.map((item) => (
        <React.Fragment key={item.id}>
          <li css={(theme) => listItem(theme, depth)}>
            <RichText richText={item.numbered_list_item.rich_text} />
          </li>
          {item.numbered_list_item.children && (
            <NotionRenderer
              blocks={item.numbered_list_item.children}
              depth={depth + 1}
            />
          )}
        </React.Fragment>
      ))}
    </ol>
  );
};

export default NumberedList;
