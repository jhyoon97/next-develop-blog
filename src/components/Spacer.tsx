import React from "react";
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const box = css`
  margin-bottom: 0.5rem;
`;

const Spacer = ({ children }: Props) => {
  return <div css={box}>{children}</div>;
};

export default Spacer;
