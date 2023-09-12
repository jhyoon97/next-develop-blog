import { css } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";
import type { ToggleableHeading2 } from "@types";

import RichText from "./RichText";
import ToggleBlockBox from "./ToggleBlockBox";

interface Props {
  block: ToggleableHeading2;
  depth: number;
}

const box = css`
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const heading = (theme: Theme) => css`
  flex: 1;
  color: ${theme.text};
  font-weight: bold;
  white-space: pre-wrap;
`;

const HeadingLevel2 = ({ block, depth }: Props) => {
  // 헤더에서 h1태그, 타이틀에서 h2 태그 사용중이므로 h4태그 사용

  return (
    <div css={box}>
      <ToggleBlockBox
        childrenBlocks={block.heading_2.children}
        isToggleable={block.heading_2.is_toggleable}
        depth={depth}
      >
        <h4 css={heading}>
          <RichText richText={block.heading_2.rich_text} />
        </h4>
      </ToggleBlockBox>
    </div>
  );
};

export default HeadingLevel2;
