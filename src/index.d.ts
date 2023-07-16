import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    bg: string;
    text: string;
    headerText: string;
    headerBg: string;
    postTitle: string;
    postDate: string;
    code: string;
    codeBg: string;
    link: string;
    linkHover: string;
  }
}
