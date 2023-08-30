import { css } from "@emotion/react";
import { useImageSize } from "react-image-size";

// components
import ImageSkeleton from "components/ImageSkeleton";

// types
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Dimensions } from "react-image-size";
import type { OnResourceErrorFunction } from ".";

import Caption from "./Caption";

interface Props {
  block: ImageBlockObjectResponse;
  onResourceError: OnResourceErrorFunction;
}

const box = (imageDimensions: Dimensions | null) => css`
  align-self: center;
  max-width: 100%;
  width: ${imageDimensions?.width || 200}px;
`;

const image = css`
  align-self: center;
  margin: 0.5rem 0;
`;

const Code = ({ block, onResourceError }: Props) => {
  const url = (() => {
    if ("file" in block.image) {
      return block.image.file.url;
    }

    return block.image.external.url;
  })();
  const [dimensions, { loading, error }] = useImageSize(url);

  if (error) {
    onResourceError();
    return null;
  }

  return (
    <figure css={box(dimensions)}>
      {loading ? <ImageSkeleton /> : <img css={image} src={url} alt="" />}
      {block.image.caption.length > 0 && (
        <Caption richText={block.image.caption} />
      )}
    </figure>
  );
};

export default Code;
