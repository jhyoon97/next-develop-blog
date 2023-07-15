import { css } from "@emotion/react";

// types
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import Paragraph from "./Paragraph";

interface Props {
  blocks: BlockObjectResponse[];
}

const box = css`
  width: 100%;
`;

const NotionRenderer = ({ blocks }: Props) => {
  return (
    <div css={box}>
      {blocks.map((block) =>
        (() => {
          switch (block.type) {
            case "paragraph":
              return <Paragraph key={block.id} block={block} />;
            case "heading_1":
              return "<<heading_1>>";
            case "heading_2":
              return "<<heading_2>>";
            case "heading_3":
              return "<<heading_3>>";
            case "bulleted_list_item":
              return "<<bulleted_list_item>>";
            case "numbered_list_item":
              return "<<numbered_list_item>>";
            case "image":
              return "<<image>>";
            case "code":
              return "<<code>>";
            case "link_preview":
              return "<<link_preview>>";
            case "bookmark":
              return "<<bookmark>>";
            default:
              return null;
          }
        })()
      )}
    </div>
  );
};

export default NotionRenderer;
