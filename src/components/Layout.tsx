import React from "react";
import { css, useTheme } from "@emotion/react";

// types
import type { Theme } from "@emotion/react";

interface Props {
  children: React.ReactNode;
}

const box = css`
  width: 100%;
`;

const header = {
  box: (theme: Theme) => css`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${theme.headerBg};
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
  title: (theme: Theme) => css`
    color: ${theme.headerText};
  `,
};

const body = {
  box: css`
    z-index: 1;
    padding: calc(1.5rem + 1.5rem + 2rem) 0 2rem;
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
  const theme = useTheme();

  return (
    <div css={box}>
      <header css={header.box(theme)}>
        <div css={header.innerBox}>
          <h1 css={header.title(theme)}>jhdev</h1>
        </div>
      </header>
      <div css={body.box}>
        <main css={body.contentBox}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
