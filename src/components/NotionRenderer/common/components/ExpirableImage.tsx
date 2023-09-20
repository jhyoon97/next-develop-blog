import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { isFullBlock } from "@notionhq/client";
import axios from "axios";
import Image from "next/image";
import dayjs from "dayjs";
import Skeleton from "react-loading-skeleton";

// types
import type { CSSProperties } from "react";
import type { ImageProps } from "next/image";
import type {
  ImageBlockObjectResponse,
  CalloutBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface Props extends Omit<ImageProps, "src"> {
  wrapperStyle?: CSSProperties;
  blockId: string;
  src: string;
  expiryTime: string;
}

const box = css`
  & .skeleton-container {
    width: 100%;
  }
`;

const SKELETON_HEIGHT = 150;

const ExpirableImage = ({
  wrapperStyle,
  blockId,
  src,
  expiryTime,
  ...imageProps
}: Props) => {
  const [imageURL, setImageURL] = useState(src);
  const [blockReloadState, setBlockReloadState] = useState<
    null | "LOADING" | "SUCCESS" | "FAILURE"
  >(null);
  const [imageLoading, setImageLoading] = useState(true);

  const refetchBlock = async () => {
    // 1회에 한하여 블록 리로드
    if (blockReloadState !== "FAILURE") {
      setBlockReloadState("LOADING");

      try {
        const { data: newBlock } = await axios.get<
          ImageBlockObjectResponse | CalloutBlockObjectResponse
        >(`/api/block/${blockId}`);

        if (isFullBlock(newBlock)) {
          if (newBlock.type === "image" && newBlock.image.type === "file") {
            setImageURL(newBlock.image.file.url);
            setBlockReloadState("SUCCESS");
          } else if (
            newBlock.type === "callout" &&
            newBlock.callout.icon?.type === "file"
          ) {
            setImageURL(newBlock.callout.icon.file.url);
            setBlockReloadState("SUCCESS");
          } else {
            setBlockReloadState("FAILURE");
          }
        }
      } catch (err) {
        console.log(err);
        setBlockReloadState("FAILURE");
      }
    }
  };

  useEffect(() => {
    console.log(
      `${dayjs(expiryTime).format("YYYY-MM-DD HH:mm:ss")}, ${dayjs().format(
        "YYYY-MM-DD HH:mm:ss"
      )}, ${dayjs(expiryTime).isAfter(dayjs(), "seconds")}`
    );
    if (dayjs(expiryTime).isAfter(dayjs(), "seconds")) {
      refetchBlock();
    }
  }, []);

  return (
    <div
      className="expirable-image"
      css={box}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: imageProps.width || "100%",
        height: imageProps.height || (imageLoading ? SKELETON_HEIGHT : "100%"),
        lineHeight: 1,
        ...wrapperStyle,
      }}
    >
      {(() => {
        switch (blockReloadState) {
          case "LOADING":
            return (
              <Skeleton
                containerClassName="skeleton-container"
                style={{ position: "absolute", top: 0, left: 0 }}
                width={imageProps.width || "100%"}
                height={imageProps.height || SKELETON_HEIGHT}
              />
            );
          case "SUCCESS":
            return (
              <>
                {imageLoading && (
                  <Skeleton
                    containerClassName="skeleton-container"
                    style={{ position: "absolute", top: 0, left: 0 }}
                    width={imageProps.width || "100%"}
                    height={imageProps.height || SKELETON_HEIGHT}
                  />
                )}
                <Image
                  {...imageProps}
                  src={imageURL}
                  onLoadingComplete={() => setImageLoading(false)}
                />
              </>
            );
          case "FAILURE":
            return null;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default ExpirableImage;
