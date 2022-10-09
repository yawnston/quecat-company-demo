import * as React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import { AppType } from 'next/dist/shared/lib/utils'
import { EmotionCache } from '@emotion/cache'
import theme from '../utils/theme'
import createEmotionCache from '../utils/createEmotionCache'


// SOURCES:
//  - https://stackoverflow.com/questions/67088295/how-to-add-custom-type-properties-to-the-appprops-type-from-next-app
//  - https://stackoverflow.com/questions/67087999/how-to-properly-type-the-document-tsx-file-from-next-js
//  - https://blog.logrocket.com/getting-started-with-mui-and-next-js/

interface DocumentProps extends DocumentInitialProps {
    emotionStyleTags: React.ReactNode[]
}

const MyDocument = (props: DocumentProps) => {
    return (
        <Html lang="en">
            <Head>
                {/* PWA primary color */}
                <meta name="theme-color" content={theme.palette.primary.main} />
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                {/* Inject MUI styles first to match with the prepend: true configuration. */}
                {props.emotionStyleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (
    ctx: DocumentContext
): Promise<DocumentProps> => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (
                App: AppType | React.ComponentType<{ emotionCache: EmotionCache }>
            ) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />
                },
        })

    const initialProps = await Document.getInitialProps(ctx)
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))

    return {
        ...initialProps,
        emotionStyleTags,
    }
}

export default MyDocument
