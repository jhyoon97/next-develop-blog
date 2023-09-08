// types
import type { HasChildrenToggle } from "@types";

import RichText from "./RichText";
import ToggleWrapper from "./ToggleWrapper";

interface Props {
  block: HasChildrenToggle;
  depth: number;
}

const Toggle = ({ block, depth }: Props) => {
  return (
    <ToggleWrapper
      childrenBlocks={block.toggle.children}
      isToggleable
      depth={depth}
    >
      <RichText richText={block.toggle.rich_text} />
    </ToggleWrapper>
  );
};

export default Toggle;
