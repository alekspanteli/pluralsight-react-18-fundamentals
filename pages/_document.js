/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdn.tailwindcss.com"
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
