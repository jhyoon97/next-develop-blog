import { css } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";
import RichText from "components/NotionRenderer/RichText";
import { blockBox } from "components/NotionRenderer/commonStyles";

// types
import type { Theme } from "@emotion/react";
import type { HasChildrenQuote } from "@types";

interface Props {
  block: HasChildrenQuote;
  depth: number;
}

const box = (theme: Theme) => css`
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-size: 1rem;
  border-left: 3px solid ${theme.text};
`;

const Quote = ({ block, depth }: Props) => {
  return (
    <div css={[blockBox, box]}>
      <RichText richText={block.quote.rich_text} />

      {block.quote.children && (
        <NotionRenderer
          blocks={block.quote.children}
          depth={1}
          style={{ marginTop: "0.5rem" }}
        />
      )}
    </div>
  );
};

export default Quote;
