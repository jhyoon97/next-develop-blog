import { css } from "@emotion/react";

// types
import type { HasChildrenToggle } from "types/notion";

import ToggleOuter from "../common/components/ToggleOuter";
import RichText from "../common/components/RichText";
import { commonBox } from "../common/styles";

interface Props {
  block: HasChildrenToggle;
  depth: number;
}

const box = css`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const textBox = css`
  flex: 1;
`;

const Toggle = ({ block, depth }: Props) => {
  return (
    <div css={[commonBox, box]}>
      <ToggleOuter
        childrenBlocks={block.toggle.children}
        isToggleable
        depth={depth}
      >
        <div css={textBox}>
          <RichText richText={block.toggle.rich_text} />
        </div>
      </ToggleOuter>
    </div>
  );
};

export default Toggle;
