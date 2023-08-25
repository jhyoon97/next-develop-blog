import { css, useTheme } from "@emotion/react";

// types
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  block: ParagraphBlockObjectResponse;
}

const box = (theme: Theme) => css`
  margin-bottom: 4px;
  color: ${theme.text};
  font-size: 1rem;
`;

const Paragraph = ({ block }: Props) => {
  const theme = useTheme();

  return (
    <p css={box(theme)}>
      <RichText richText={block.paragraph.rich_text} />
    </p>
  );
};

export default Paragraph;
