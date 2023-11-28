import { useState, useMemo } from "react";
import { css } from "@emotion/react";

// hooks
import useScroll from "hooks/useScroll";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenBlockObject } from "types/notion";

interface Props {
  blocks: Array<HasChildrenBlockObject>;
}

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const contentsItem = (theme: Theme) => css`
  color: ${theme.text};
  text-align: left;
  transform-origin: 0 50%;
  transition: transform 0.1s ease-in;

  &:hover {
    color: ${theme.blue};
  }
`;

const focusedContentsItem = (theme: Theme) => css`
  color: ${theme.blue};
  transform: scale(1.05);
`;

const TableOfContents = ({ blocks }: Props) => {
  const [focusHeadingId, setFocusHeadingId] = useState("");

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

  useScroll(() => {
    for (let i = tableOfContents.length - 1; i >= 0; i -= 1) {
      const element = document.getElementById(tableOfContents[i].id);

      if (
        window.scrollY + (element?.getBoundingClientRect().y || 0) <=
          window.scrollY + 10 ||
        i === 0
      ) {
        setFocusHeadingId(tableOfContents[i].id);
        break;
      }
    }
  }, [tableOfContents]);

  return (
    <div css={box}>
      {tableOfContents.map((item) => (
        <a
          type="button"
          key={item.id}
          css={(theme) => [
            contentsItem,
            focusHeadingId === item.id && focusedContentsItem,
          ]}
          style={{
            marginLeft: `${Number(item.type.replace("heading_", ""))}rem`,
          }}
          href={`#${item.id}`}
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default TableOfContents;
