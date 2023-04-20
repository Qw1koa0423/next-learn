import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="zh-CN">
            <Head />
            <body>
                <div id="overlays" />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
