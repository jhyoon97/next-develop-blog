import React from "react";
import { css } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";
import RichText from "components/NotionRenderer/RichText";
import { blockBox } from "components/NotionRenderer/commonStyles";

// types
import type { HasChildrenBulletedList } from "@types";
import type { Theme } from "@emotion/react";

interface Props {
  blocks: Array<HasChildrenBulletedList>;
  depth: number;
}

const listBox = css`
  list-style: none;
`;

const listItem = (theme: Theme) =>
  css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    margin-bottom: 0.25rem;
    width: 100%;
    color: ${theme.text};
    font-size: 1rem;

    &:before {
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-100%);
      padding-right: 0.2rem;
    }
  `;

const bulletBox = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 18px;
  width: 6px;
  height: 1.5em;
`;

const bullet = (theme: Theme) => css`
  width: 100%;
  height: 6px;
  background: ${theme.text};
  border-color: ${theme.text};
`;

const bulletDisc = css`
  border-radius: 50%;
`;

const bulletCircle = css`
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  background: transparent;
`;

const BulletedList = ({ blocks, depth }: Props) => {
  return (
    <ul css={[blockBox, listBox]}>
      {blocks.map((item) => (
        <React.Fragment key={item.id}>
          <li css={listItem}>
            <div css={bulletBox}>
              <i
                css={[
                  bullet,
                  (() => {
                    switch (depth % 3) {
                      case 1:
                        return bulletDisc;
                      case 0:
                        return bulletCircle;
                      default:
                        return null;
                    }
                  })(),
                ]}
              />
            </div>
            <p>
              <RichText richText={item.bulleted_list_item.rich_text} />
            </p>
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
