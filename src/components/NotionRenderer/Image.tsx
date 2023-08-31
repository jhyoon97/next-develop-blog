import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { useImageSize } from "react-image-size";
import axios from "axios";

// components
import ImageSkeleton from "components/ImageSkeleton";

// types
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Dimensions } from "react-image-size";

import Caption from "./Caption";

interface Props {
  block: ImageBlockObjectResponse;
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

const getImageURL = (block: ImageBlockObjectResponse) => {
  if ("file" in block.image) {
    return block.image.file.url;
  }

  return block.image.external.url;
};

const Image = ({ block }: Props) => {
  const [imageURL, setImageURL] = useState(getImageURL(block));
  const [blockReloadState, setBlockReloadState] = useState<
    null | "loading" | "error" | "success"
  >(null);
  const [dimensions, { loading, error }] = useImageSize(imageURL);

  const refetchBlock = async () => {
    setBlockReloadState("loading");

    try {
      const { data: newBlock } = await axios.get<ImageBlockObjectResponse>(
        `/api/block/${block.id}`
      );

      if ("type" in newBlock && newBlock.type === "image") {
        setImageURL(getImageURL(newBlock));
        setBlockReloadState("success");
      }
    } catch (err) {
      console.log(err);
      setBlockReloadState("error");
    }
  };

  useEffect(() => {
    if (error) {
      refetchBlock();
    }
  }, [error]);

  if (error && blockReloadState === "error") {
    return <p>IMAGE CRASHED XD</p>;
  }

  return (
    <figure css={box(dimensions)}>
      {loading || blockReloadState === "loading" ? (
        <ImageSkeleton />
      ) : (
        <img css={image} src={imageURL} alt="" />
      )}
      {block.image.caption.length > 0 && (
        <Caption richText={block.image.caption} />
      )}
    </figure>
  );
};

export default Image;
