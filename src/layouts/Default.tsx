import React from "react";
import { css, useTheme } from "@emotion/react";
import Link from "next/link";

// utils
import constants from "utils/constants";

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
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1200px;

    ${constants.mediaQuery.isTablet} {
      padding: 1rem;
    }
  `,
  title: (theme: Theme) => css`
    color: ${theme.headerText};
    font-size: 1rem;
  `,
};

const body = {
  box: css`
    z-index: 1;
    padding-top: calc(1.5rem + 2rem);
    width: 100%;
  `,
  contentBox: css`
    padding: 2rem;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;

    ${constants.mediaQuery.isTablet} {
      padding: 1rem;
    }
  `,
};

const Layout = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <div css={box}>
      <header css={header.box(theme)}>
        <div css={header.innerBox}>
          <Link href="/">
            <h1 css={header.title(theme)}>jhdev</h1>
          </Link>
        </div>
      </header>
      <div css={body.box}>
        <main css={body.contentBox}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
