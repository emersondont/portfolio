import { Html, Head, Main, NextScript } from 'next/document'
// import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="jj7dEZwtYexCxelWDvkojbJMPezq2OWy6RRBXJwRjU0" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </body>
    </Html>
  )
}
