import { css } from "@emotion/react";

// components
import RichText from "components/NotionRenderer/RichText";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenToggleableHeading2 } from "@types";

import ToggleOuter from "../common/components/ToggleOuter";
import { commonBox } from "../common/styles";

interface Props {
  block: HasChildrenToggleableHeading2;
  depth: number;
}

const box = css`
  margin: 2rem 0 1rem;
  font-size: 1.4rem;
`;

const heading = (theme: Theme) => css`
  flex: 1;
  color: ${theme.text};
  font-weight: bold;
`;

const HeadingLevel2 = ({ block, depth }: Props) => {
  // 헤더에서 h1태그, 타이틀에서 h2 태그 사용중이므로 h4태그 사용

  return (
    <div css={[commonBox, box]}>
      <ToggleOuter
        childrenBlocks={block.heading_2.children}
        isToggleable={block.heading_2.is_toggleable}
        depth={depth}
      >
        <h4 css={heading}>
          <RichText richText={block.heading_2.rich_text} />
        </h4>
      </ToggleOuter>
    </div>
  );
};

export default HeadingLevel2;
