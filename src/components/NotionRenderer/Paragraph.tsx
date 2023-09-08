import { css, useTheme } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { HasChildrenParagraph } from "@types";
import type { Theme } from "@emotion/react";

import RichText from "./RichText";

interface Props {
  block: HasChildrenParagraph;
  depth: number;
}

const paragraph = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  width: 100%;
  color: ${theme.text};
  font-size: 1rem;
`;

const Paragraph = ({ block, depth }: Props) => {
  const theme = useTheme();

  return (
    <>
      <p css={paragraph(theme)}>
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <NotionRenderer blocks={block.paragraph.children} depth={depth + 1} />
      )}
    </>
  );
};

export default Paragraph;
