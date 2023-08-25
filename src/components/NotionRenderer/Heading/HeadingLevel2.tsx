import { css } from "@emotion/react";

// types
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Theme } from "@emotion/react";

import RichText from "../RichText";

interface Props {
  block: Heading2BlockObjectResponse;
}

const box = (theme: Theme) => css`
  color: ${theme.text};
  font-size: 1.2rem;
  font-weight: bold;
`;

const HeadingLevel2 = ({ block }: Props) => {
  // 헤더에서 h1태그 사용중이므로 h3태그 사용
  return (
    <h3 css={box}>
      <RichText richText={block.heading_2.rich_text} />
    </h3>
  );
};

export default HeadingLevel2;
