import React, { useMemo } from "react";
import { css } from "@emotion/react";

// types
import type { HasChildrenBlockObject } from "types/notion";

interface Props {
  blocks: Array<HasChildrenBlockObject>;
}

const box = css`
  width: 100%;
`;

const contentItem = (depth: number) => css`
  margin-left: ${depth - 1}rem;
`;

const TableOfContents = ({ blocks }: Props) => {
  const tableOfContents = useMemo(() => {
    return blocks
      .filter((block) => block.type.startsWith("heading_"))
      .map((block) => ({
        type: block.type,
        id: block.id,
        text: (block as any)[block.type].rich_text
          .map((item: any) => item.text.content)
          .join(""),
      }));
  }, [blocks]);

  return (
    <div css={box}>
      {tableOfContents.map((item) => (
        <div
          key={item.id}
          css={contentItem(Number(item.type.replace("heading_", "")))}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
