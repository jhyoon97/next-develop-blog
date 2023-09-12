import { css } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";
import type { ToggleableHeading3 } from "@types";

import RichText from "./RichText";
import ToggleBlockBox from "./ToggleBlockBox";

interface Props {
  block: ToggleableHeading3;
  depth: number;
}

const box = css`
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const heading = (theme: Theme) => css`
  flex: 1;
  color: ${theme.text};
  font-weight: bold;
  white-space: pre-wrap;
`;

const HeadingLevel3 = ({ block, depth }: Props) => {
  // 헤더에서 h1태그, 타이틀에서 h2 태그 사용중이므로 h5태그 사용
  return (
    <div css={box}>
      <ToggleBlockBox
        childrenBlocks={block.heading_3.children}
        isToggleable={block.heading_3.is_toggleable}
        depth={depth}
      >
        <h5 css={heading}>
          <RichText richText={block.heading_3.rich_text} />
        </h5>
      </ToggleBlockBox>
    </div>
  );
};

export default HeadingLevel3;
