import { css } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";
import RichText from "components/NotionRenderer/RichText";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenQuote } from "types/notion";

import { commonBox } from "../common/styles";

interface Props {
  block: HasChildrenQuote;
}

const box = (theme: Theme) => css`
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  border-left: 3px solid ${theme.text};
`;

const Quote = ({ block }: Props) => {
  return (
    <div css={[commonBox, box]}>
      <RichText richText={block.quote.rich_text} />

      {block.quote.children && (
        <NotionRenderer
          blocks={block.quote.children}
          style={{ marginTop: "0.5rem" }}
        />
      )}
    </div>
  );
};

export default Quote;
