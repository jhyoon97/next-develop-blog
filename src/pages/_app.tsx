import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "react-loading-skeleton/dist/skeleton.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Global } from "@emotion/react";

// types
import type { AppProps } from "next/app";

// components
import Layout from "components/Layout";

// dayjs
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

// utils
import resetCss from "utils/resetCss";
import initAxios from "utils/axios";

dayjs.extend(timezone);
dayjs.tz.setDefault("Asia/Seoul"); // 타임존 설정

initAxios();

const client = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={client}>
      <Global styles={resetCss} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
