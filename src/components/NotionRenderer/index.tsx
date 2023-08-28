import { css } from "@emotion/react";

// types
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import Paragraph from "./Paragraph";
import HeadingLevel1 from "./Heading/HeadingLevel1";
import HeadingLevel2 from "./Heading/HeadingLevel2";
import HeadingLevel3 from "./Heading/HeadingLevel3";
import Code from "./Code";

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
              return <HeadingLevel1 key={block.id} block={block} />;
            case "heading_2":
              return <HeadingLevel2 key={block.id} block={block} />;
            case "heading_3":
              return <HeadingLevel3 key={block.id} block={block} />;
            case "code":
              return <Code key={block.id} block={block} />;
            case "bulleted_list_item":
              return "<<bulleted_list_item>>";
            case "numbered_list_item":
              return "<<numbered_list_item>>";
            case "image":
              return "<<image>>";
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
