import { css } from "@emotion/react";
import { useState } from "react";
import axios from "axios";
import NextImage from "next/image";

// components
import LoadingIndicator from "components/LoadingIndicator";

// types
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import Caption from "./Caption";

interface Props {
  block: ImageBlockObjectResponse;
}

const box = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const figure = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    position: relative !important;
    margin: 0.5rem 0;
    width: auto !important;
  }
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
    null | "LOADING" | "SUCCESS" | "FAILURE"
  >(null);

  const refetchBlock = async () => {
    // 1회에 한하여 블록 리로드
    if (blockReloadState !== "FAILURE") {
      setBlockReloadState("LOADING");

      try {
        const { data: newBlock } = await axios.get<ImageBlockObjectResponse>(
          `/api/block/${block.id}`
        );

        if ("type" in newBlock && newBlock.type === "image") {
          setImageURL(getImageURL(newBlock));
          setBlockReloadState("SUCCESS");
        }
      } catch (err) {
        console.log(err);
        setBlockReloadState("FAILURE");
      }
    }
  };

  return (
    <div css={box}>
      {blockReloadState === "LOADING" ? (
        <LoadingIndicator />
      ) : (
        <figure css={figure}>
          {blockReloadState === "FAILURE" ? (
            <p>IMAGE CRASHED XD</p>
          ) : (
            <NextImage
              fill
              src={imageURL}
              alt=""
              onError={() => refetchBlock()}
              unoptimized
            />
          )}

          {block.image.caption.length > 0 && (
            <Caption richText={block.image.caption} />
          )}
        </figure>
      )}
    </div>
  );
};

export default Image;
