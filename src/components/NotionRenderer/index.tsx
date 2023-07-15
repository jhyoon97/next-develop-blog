import { css } from "@emotion/react";

// types
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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
            case "heading_2":
            case "heading_3":
            case "bulleted_list_item":
            case "numbered_list_item":
            case "image":
            case "code":
            case "link_preview":
            case "bookmark":
            default:
              return null;
          }
        })()
      )}
    </div>
  );
};

export default NotionRenderer;
