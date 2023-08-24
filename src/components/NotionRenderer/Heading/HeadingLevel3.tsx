import { css } from "@emotion/react";

// types
import type { Heading3BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Theme } from "@emotion/react";

import HeadingText from "./HeadingText";

interface Props {
  block: Heading3BlockObjectResponse;
}

const box = (theme: Theme) => css`
  color: ${theme.text};
  font-size: 1.1rem;
  font-weight: bold;
`;

const HeadingLevel3 = ({ block }: Props) => {
  // 헤더에서 h1태그 사용중이므로 h4태그 사용
  return (
    <h4 css={box}>
      <HeadingText richText={block.heading_3.rich_text} />
    </h4>
  );
};

export default HeadingLevel3;
