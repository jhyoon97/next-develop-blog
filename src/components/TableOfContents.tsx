import { useState, useMemo } from "react";
import { css } from "@emotion/react";

// hooks
import useResizeWindow from "hooks/useResizeWindow";
import useScroll from "hooks/useScroll";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenBlockObject } from "types/notion";

interface Props {
  blocks: Array<HasChildrenBlockObject>;
}

interface HeadingListItem {
  id: string;
  offsetTop: number;
}

const box = css`
  width: 100%;
`;

const contentsItem = (theme: Theme, depth: number) => css`
  margin-left: ${depth - 1}rem;
  color: ${theme.text};
`;

const focusedContentsItem = (theme: Theme) => css`
  color: ${theme.blue};
  transform-origin: 0 50%;
  transform: scale(1.05);
  transition: all 0.1s ease-in;
`;

const TableOfContents = ({ blocks }: Props) => {
  const [headingList, setHeadingList] = useState<HeadingListItem[]>([]);
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

  useResizeWindow(() => {
    setHeadingList(
      tableOfContents.map((item) => {
        const element = document.getElementById(item.id);

        return {
          id: item.id,
          offsetTop: window.scrollY + (element?.getBoundingClientRect().y || 0),
        };
      })
    );
  }, [tableOfContents]);

  useScroll(() => {
    for (let i = headingList.length - 1; i >= 0; i -= 1) {
      if (headingList[i].offsetTop - 100 <= window.scrollY || i === 0) {
        setFocusHeadingId(headingList[i].id);
        break;
      }
    }
  }, [headingList]);

  return (
    <div css={box}>
      {tableOfContents.map((item) => (
        <div
          key={item.id}
          css={(theme) => [
            contentsItem(theme, Number(item.type.replace("heading_", ""))),
            focusHeadingId === item.id && focusedContentsItem(theme),
          ]}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default TableOfContents;
