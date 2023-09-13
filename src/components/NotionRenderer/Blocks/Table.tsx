/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// components
import {
  blockBox,
  BLOCK_LINE_HEIGHT,
} from "components/NotionRenderer/commonStyles";
import RichText from "components/NotionRenderer/RichText";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenTable } from "@types";

interface Props {
  block: HasChildrenTable;
}

const box = css`
  margin: 1rem 0;
`;

const table = (theme: Theme) => css`
  width: 100%;
  table-layout: fixed;
  border: 1px solid ${theme.boxBorder};
`;

const tableRow = css`
  height: ${BLOCK_LINE_HEIGHT + 1}em;
`;

const tableCell = (theme: Theme) => css`
  padding: 0.5rem;
  border: 1px solid ${theme.boxBorder};
  font-size: 1rem;
  text-align: center;
`;

const titleCell = (theme: Theme) => css`
  background: ${theme.notion.gray_background};
`;

const Table = ({ block }: Props) => {
  return (
    <div css={[blockBox, box]}>
      <table css={table}>
        <tbody>
          {block.table.children &&
            block.table.children.map((row, rowIndex) => {
              return (
                <tr
                  key={row.id}
                  css={[
                    tableRow,
                    rowIndex === 0 &&
                      block.table.has_column_header &&
                      titleCell,
                  ]}
                >
                  {row.table_row.cells.map((cell, cellIndex) => {
                    return (
                      <td
                        key={cellIndex}
                        css={[
                          tableCell,
                          cellIndex === 0 &&
                            block.table.has_row_header &&
                            titleCell,
                        ]}
                      >
                        <RichText richText={cell} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
