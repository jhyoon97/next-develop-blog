import { css } from "@emotion/react";

// types
import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  block: Heading1BlockObjectResponse;
}

const box = (theme: Theme) => css`
  margin-bottom: 1rem;
  color: ${theme.text};
  font-size: 1.3rem;
  font-weight: bold;
`;

const HeadingLevel1 = ({ block }: Props) => {
  // 헤더에서 h1태그 사용중이므로 h2태그 사용
  return (
    <h2 css={box}>
      <RichText richText={block.heading_1.rich_text} />
    </h2>
  );
};

export default HeadingLevel1;
