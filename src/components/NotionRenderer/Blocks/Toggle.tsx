import { css } from "@emotion/react";

// components
import { blockBox } from "components/NotionRenderer/commonStyles";
import RichText from "components/NotionRenderer/RichText";

// types
import type { HasChildrenToggle } from "@types";

import ToggleOuter from "./ToggleOuter";

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
    <div css={[blockBox, box]}>
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
