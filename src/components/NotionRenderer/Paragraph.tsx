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

const box = (theme: Theme) => css`
  margin-bottom: 0.25rem;
  width: 100%;
  color: ${theme.text};
  font-size: 1rem;
  white-space: pre-wrap;
`;

const Paragraph = ({ block, depth }: Props) => {
  const theme = useTheme();

  return (
    <>
      <p css={box(theme)}>
        <RichText richText={block.paragraph.rich_text} />
      </p>
      {block.paragraph.children && (
        <NotionRenderer blocks={block.paragraph.children} depth={depth + 1} />
      )}
    </>
  );
};

export default Paragraph;
