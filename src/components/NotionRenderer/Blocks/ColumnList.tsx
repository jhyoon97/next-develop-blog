import { css } from "@emotion/react";

// components
import { blockBox } from "components/NotionRenderer/commonStyles";
import NotionRenderer from "components/NotionRenderer";

// types
import type { HasChildrenColumnList } from "@types";

interface Props {
  block: HasChildrenColumnList;
}

const box = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const columnBox = css`
  flex-grow: 0;
  overflow: hidden;
`;

const ColumnList = ({ block }: Props) => {
  return (
    <div css={[blockBox, box]}>
      {block.column_list.children &&
        block.column_list.children.map((column, _, array) => (
          <div
            key={column.id}
            css={columnBox}
            style={{ width: `calc((100% * (${1 / array.length}) - 1rem)` }}
          >
            <NotionRenderer blocks={column.column.children || []} />
          </div>
        ))}
    </div>
  );
};

export default ColumnList;
