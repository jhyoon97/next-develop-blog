import { css } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";
import type { ToggleableHeading1 } from "@types";

import RichText from "./RichText";
import ToggleBlockBox from "./ToggleBlockBox";

interface Props {
  block: ToggleableHeading1;
  depth: number;
}

const box = css`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const heading = (theme: Theme) => css`
  flex: 1;
  color: ${theme.text};
  font-weight: bold;
  white-space: pre-wrap;
`;

const HeadingLevel1 = ({ block, depth }: Props) => {
  // 헤더에서 h1태그, 타이틀에서 h2 태그 사용중이므로 h3태그 사용

  return (
    <div css={box}>
      <ToggleBlockBox
        childrenBlocks={block.heading_1.children}
        isToggleable={block.heading_1.is_toggleable}
        depth={depth}
      >
        <h3 css={heading}>
          <RichText richText={block.heading_1.rich_text} />
        </h3>
      </ToggleBlockBox>
    </div>
  );
};

export default HeadingLevel1;
