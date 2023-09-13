import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    bg: string;
    text: string;
    subText: string;
    headerText: string;
    headerBg: string;
    postTitle: string;
    postDate: string;
    code: string;
    codeBg: string;
    caption: string;
    link: string;
    boxBorder: string;
    hoverBackground: string;
    white: string;
    blue: string;
    notion: {
      gray: string;
      brown: string;
      orange: string;
      yellow: string;
      green: string;
      blue: string;
      purple: string;
      pink: string;
      red: string;
      gray_background: string;
      brown_background: string;
      orange_background: string;
      yellow_background: string;
      green_background: string;
      blue_background: string;
      purple_background: string;
      pink_background: string;
      red_background: string;
    };
  }
}
