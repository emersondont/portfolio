import { Html, Head, Main, NextScript } from 'next/document'
// import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="google-site-verification" content="jj7dEZwtYexCxelWDvkojbJMPezq2OWy6RRBXJwRjU0" />
        <title>Emersondont - Desenvolvedor</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </Html>
  )
}
