import { css, useTheme } from "@emotion/react";

// types
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  richText: Array<RichTextItemResponse>;
}

const box = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  color: ${theme.caption};
  font-size: 0.9rem;
  white-space: pre-wrap;
`;

const Caption = ({ richText }: Props) => {
  const theme = useTheme();

  return (
    <figcaption css={box(theme)}>
      <RichText richText={richText} />
    </figcaption>
  );
};

export default Caption;
