import { css } from "@emotion/react";

// types
import type { HasChildrenToggle } from "@types";

import RichText from "./RichText";
import ToggleBlockBox from "./ToggleBlockBox";

interface Props {
  block: HasChildrenToggle;
  depth: number;
}

const box = css`
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1rem;
`;

const paragraph = css`
  white-space: pre-wrap;
`;

const Toggle = ({ block, depth }: Props) => {
  return (
    <div css={box}>
      <ToggleBlockBox
        childrenBlocks={block.toggle.children}
        isToggleable
        depth={depth}
      >
        <p css={paragraph}>
          <RichText richText={block.toggle.rich_text} />
        </p>
      </ToggleBlockBox>
    </div>
  );
};

export default Toggle;
