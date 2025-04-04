export default {
  docsRepositoryBase: 'https://github.com/Ibex-CRM/Ibex-docs/blob/master',
  logo: (
    <>
      <img
        width="50"
        height="50"
        src="https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png"
        alt="logo"
        className="h-6 w-6 inline mr-2"
      />
      <span className="text-gray-600 font-normal hidden md:inline">
        <strong>Ibex: </strong>
        Help Hub
      </span>
    </>
  ),
  head: (
    <>
      <title>Welcome to Ibex User Documentation</title>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Ibex User Documentation" />
      <meta name="og:description" content="Ibex User Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png"
      />
      <meta name="og:title" content="Ibex User Documentation" />
      <meta
        name="og:image"
        content="https://res.cloudinary.com/montycat/image/upload/v1557750788/Goat/goat_logo.png"
      />
      <meta name="apple-mobile-web-app-title" content="Cabra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    component: <></>,
  },
  navbar: {
    extraContent: <div style={{width: '25px'}}></div>,
  },
  faviconGlyph: '🐐',
  primaryHue: { dark: 23, light: 25 },
  primarySaturation: { dark: 85, light: 85 },
}
