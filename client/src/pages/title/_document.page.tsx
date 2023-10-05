import { Head, Html, Main, NextScript } from 'next/document';
import { GA_ID } from 'src/utils/gtag';

function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>next-frourio-starter</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="next-frourio-starter" />
        <link rel="icon" href="favicon.png" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />
        <link
          rel="stylesheet"
          href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-2/css/6-1-2.css"
        />
        {/* 他の<head>内の要素 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Main />
        <NextScript />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js" />
        <script src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-1-2/js/6-1-2.js" />
      </body>
    </Html>
  );
}

export default Document;
