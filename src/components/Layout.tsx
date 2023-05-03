import React from "react";
import { css } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const box = css`
  width: 100%;
`;

const header = {
  box: css`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #1f2328;
  `,
  innerBox: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    padding: 16px 32px;
    width: 100%;
    max-width: 1200px;
  `,
  title: css`
    color: #fff;
  `,
};

const body = {
  box: css`
    z-index: 1;
    margin-top: calc(24px + 1.5rem + 32px);
    width: 100%;
  `,
  contentBox: css`
    padding: 0 32px;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  `,
};

const Layout = ({ children }: Props) => {
  return (
    <div css={box}>
      <header css={header.box}>
        <div css={header.innerBox}>
          <h1 css={header.title}>jhdev</h1>
        </div>
      </header>
      <div css={body.box}>
        <main css={body.contentBox}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
