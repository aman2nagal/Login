import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
// import 'regenerator-runtime/runtime';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        return await Document.getInitialProps(ctx);
    }
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    {/* <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    /> */}
                </Head>
                <body className="bg-white dark:bg-slate-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
