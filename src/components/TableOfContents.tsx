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
  type: string;
  text: string;
  offsetTop: number;
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
          type: item.type,
          text: item.text,
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
      {headingList.map((item) => (
        <button
          type="button"
          key={item.id}
          css={(theme) => [
            contentsItem,
            focusHeadingId === item.id && focusedContentsItem,
          ]}
          style={{
            marginLeft: `${Number(item.type.replace("heading_", ""))}rem`,
          }}
          onClick={() => {
            window.scrollTo({ top: item.offsetTop - 90 });
          }}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};

export default TableOfContents;
