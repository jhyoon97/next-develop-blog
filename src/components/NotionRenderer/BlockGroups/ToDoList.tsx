import React from "react";
import { css, useTheme } from "@emotion/react";
import { BsCheck } from "react-icons/bs";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenToDo } from "types/notion";

import RichText from "../common/components/RichText";
import { commonBox } from "../common/styles";
import { LINE_HEIGHT } from "../common/constants";

interface Props {
  blocks: Array<HasChildrenToDo>;
  depth: number;
}

const listBox = css`
  list-style: none;
`;

const listItem = css`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;

const checkboxBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.5rem;
  width: 1rem;
  height: ${LINE_HEIGHT}em;
`;

const checkbox = (theme: Theme, checked: boolean) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 1rem;
  border: 2px solid ${checked ? theme.blue : theme.boxBorder};
  background: ${checked ? theme.blue : theme.white};
`;

const ToDoList = ({ blocks, depth }: Props) => {
  const theme = useTheme();

  return (
    <ul css={[commonBox, listBox]}>
      {blocks.map((item) => (
        <React.Fragment key={item.id}>
          <li css={listItem}>
            <div css={checkboxBox}>
              <i css={(_) => checkbox(_, item.to_do.checked)}>
                {item.to_do.checked && (
                  <BsCheck
                    color={theme.white}
                    size="18"
                    style={{ maxWidth: "unset" }}
                  />
                )}
              </i>
            </div>
            <p>
              <RichText richText={item.to_do.rich_text} />
            </p>
          </li>

          {item.to_do.children && (
            <NotionRenderer blocks={item.to_do.children} depth={depth + 1} />
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default ToDoList;
