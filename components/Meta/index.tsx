import Head from 'next/head'

type Props = {
  pageTitle: string
}

const Meta = ({ pageTitle }: Props) => <Head>
  <title>{pageTitle}</title>
  <meta charSet="utf-8"/>
  <link rel="icon" href="/images/favicon_32x32.png" sizes="32x32"/>
  {/* <link rel="icon" href="/app/favicon_192x192.png" sizes="192x1922"/> */}
  {/* <link rel="apple-touch-icon-precomposed" href="/app/favicon_180x180.png"/>
  <meta name="msapplication-TileImage" content="/app/favicon_270x270.png"/> */}
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  {/* <meta name="theme-color" content="#000000"/> */}
  {/* <link rel="manifest" href="/app/manifest.json"/> */}
        <link
          rel="stylesheet"
          type="text/css"
          href={"/css/antd.min.css"}
        />
        <link rel="stylesheet" type="text/css" href="/css/global.css" />
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="/css/dx.common.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/css/dx.material.custom-scheme.css"
        /> */}

        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
</Head>


export default  Meta;
