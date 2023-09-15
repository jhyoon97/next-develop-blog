import { css } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";

import { commonBox } from "../common/styles";

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
    <div css={[commonBox, box]}>
      <div css={divider} />
    </div>
  );
};

export default Divider;
