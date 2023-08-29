// types
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface Props {
  block: ImageBlockObjectResponse;
}

const Image = ({ block }: Props) => {
  console.log(block);

  return (
    <figure>
      <img />
      <figcaption></figcaption>
    </figure>
  );
};

export default Image;
