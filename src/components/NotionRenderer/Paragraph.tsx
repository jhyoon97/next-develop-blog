import { css } from "@emotion/react";

// types
import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  block: ParagraphBlockObjectResponse;
}

const Paragraph = ({ block }: Props) => {
  return <p>{block.paragraph.rich_text.map((item) => item.plain_text)}</p>;
};

export default Paragraph;
