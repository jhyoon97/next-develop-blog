/* eslint-disable react/no-array-index-key */
import { css } from "@emotion/react";

// components
import RichText from "components/NotionRenderer/RichText";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenTable } from "types/notion";

import { commonBox } from "../common/styles";
import { LINE_HEIGHT } from "../common/constants";

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
  height: ${LINE_HEIGHT + 1}em;
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
    <div css={[commonBox, box]}>
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
