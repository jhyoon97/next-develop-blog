import { css } from "@emotion/react";
import NextImage from "next/image";

// types
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import ExpirableImage from "../common/components/ExpirableImage";
import Caption from "../common/components/Caption";
import { commonBox } from "../common/styles";

interface Props {
  block: ImageBlockObjectResponse;
}

const figure = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    position: relative !important;
    width: auto !important;
  }
`;

const Image = ({ block }: Props) => {
  return (
    <div css={commonBox}>
      <figure css={figure}>
        {block.image.type === "external" ? (
          <NextImage
            fill
            unoptimized
            src={block.image.external.url}
            loading="lazy"
            quality={100}
            alt=""
          />
        ) : (
          <ExpirableImage
            fill
            blockId={block.id}
            src={block.image.file.url}
            expiryTime={block.image.file.expiry_time}
            quality={100}
            loading="lazy"
            sizes="1200px"
            alt=""
          />
        )}

        {block.image.caption.length > 0 && (
          <Caption richText={block.image.caption} />
        )}
      </figure>
    </div>
  );
};

export default Image;
