import { css, useTheme } from "@emotion/react";

// components
import NotionRenderer from "components/NotionRenderer";

// types
import type { HasChildrenCallout } from "types/notion";

import RichText from "../common/components/RichText";
import { commonBox } from "../common/styles";
import { LINE_HEIGHT } from "../common/constants";

interface Props {
  block: HasChildrenCallout;
}

const box = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const iconBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  width: ${LINE_HEIGHT}em;
  height: ${LINE_HEIGHT}em;
`;

const iconImage = css`
  border-radius: 3px;
`;

const Callout = ({ block }: Props) => {
  const theme = useTheme();

  return (
    <div
      css={[commonBox, box]}
      style={{
        color:
          block.callout.color.endsWith("background") ||
          block.callout.color === "default"
            ? theme.text
            : theme.notion[block.callout.color],
        backgroundColor:
          block.callout.color.endsWith("background") &&
          block.callout.color !== "default"
            ? theme.notion[block.callout.color]
            : theme.bg,
        border: `1px solid ${
          block.callout.color.endsWith("background")
            ? "transparent"
            : theme.boxBorder
        }`,
      }}
    >
      {block.callout.icon && (
        <div css={iconBox}>
          {(() => {
            switch (block.callout.icon.type) {
              case "emoji":
                return <i>{block.callout.icon.emoji}</i>;
              case "external":
                return <img src={block.callout.icon.external.url} alt="" />;
              case "file":
                return (
                  <img
                    css={iconImage}
                    src={block.callout.icon.file.url}
                    alt=""
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
      )}
      <div>
        <RichText richText={block.callout.rich_text} />

        {block.callout.children && (
          <NotionRenderer blocks={block.callout.children} />
        )}
      </div>
    </div>
  );
};

export default Callout;
