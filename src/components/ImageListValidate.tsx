/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/react";

interface OnErrorFn {
  (): void;
}

interface Props {
  onError: OnErrorFn;
  images: string[];
}

const invisibleList = css`
  position: absolute;
  top: -99999px;
  left: -99999px;
  width: 1px;
  height: 1px;
`;

const ImageListValidate = ({ onError, images }: Props) => {
  return (
    <div css={invisibleList}>
      {images.map((src) => (
        <img key={src} src={src} onError={onError} alt="" />
      ))}
    </div>
  );
};

export default ImageListValidate;
