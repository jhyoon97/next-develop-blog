import { css } from "@emotion/react";

// components
import { blockBox } from "components/NotionRenderer/commonStyles";
import RichText from "components/NotionRenderer/RichText";

// types
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Theme } from "@emotion/react";

interface Props {
  richText: Array<RichTextItemResponse>;
}

const box = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  color: ${theme.caption};
  font-size: 0.9rem;
`;

const Caption = ({ richText }: Props) => {
  return (
    <figcaption css={[blockBox, box]}>
      <RichText richText={richText} />
    </figcaption>
  );
};

export default Caption;
