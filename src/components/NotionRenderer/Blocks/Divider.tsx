import { css } from "@emotion/react";

// compoennts
import { blockBox } from "components/NotionRenderer/commonStyles";

// types
import type { Theme } from "@emotion/react";

const box = css`
  margin: 1rem 0;
`;

const divider = (theme: Theme) => css`
  width: 100%;
  height: 1px;
  background: ${theme.boxBorder};
`;

const Divider = () => {
  return (
    <div css={[blockBox, box]}>
      <div css={divider} />
    </div>
  );
};

export default Divider;
