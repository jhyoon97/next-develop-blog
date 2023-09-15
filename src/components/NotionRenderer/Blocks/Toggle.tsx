import { css } from "@emotion/react";

// components
import RichText from "components/NotionRenderer/RichText";

// types
import type { HasChildrenToggle } from "@types";

import ToggleOuter from "../common/components/ToggleOuter";
import { commonBox } from "../common/styles";

interface Props {
  block: HasChildrenToggle;
  depth: number;
}

const box = css`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const Toggle = ({ block, depth }: Props) => {
  return (
    <div css={[commonBox, box]}>
      <ToggleOuter
        childrenBlocks={block.toggle.children}
        isToggleable
        depth={depth}
      >
        <p>
          <RichText richText={block.toggle.rich_text} />
        </p>
      </ToggleOuter>
    </div>
  );
};

export default Toggle;
