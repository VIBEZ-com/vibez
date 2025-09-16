import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload CSS with correct attributes */}
        <link
          rel="preload"
          href="/_next/static/css/37059c639290d4c0.css"
          as="style"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}