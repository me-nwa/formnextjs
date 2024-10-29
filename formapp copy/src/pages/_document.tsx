// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <link
            rel="stylesheet"
            href="/fonts/Janna LT Bold.ttf"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <style>{`
            @font-face {
              font-family: 'Janna LT Bold';
              src: url('/fonts/Janna LT Bold.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }
            :root {
              --janna-font: 'Janna LT Bold', sans-serif;
            }
            body {
              font-family: var(--janna-font);
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
