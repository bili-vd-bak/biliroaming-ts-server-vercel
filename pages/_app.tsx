import "./assets/main.css";
import Head from "next/head";
import type { AppProps /*, AppContext */ } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BiliRoaming Service</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
