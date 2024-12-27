// app/layout.js
export const metadata = {
  title: 'Ultimate Winks',
  description: 'Your gateway to donations and minting',
  twitter: {
    card: 'player',
    site: '@ultimatewinks', // Replace with your Twitter handle
    title: 'Ultimate Winks Platform',
    description: 'Your gateway to donations and minting on the blockchain',
    player: 'https://dynamicwink.vercel.app',
    player_width: '360',
    player_height: '560',
    image: 'https://res.cloudinary.com/dvddnptpi/image/upload/v1735300147/mnpcveoxnkgkkxp9z84u.png', // Replace with your logo URL
  },
  openGraph: {
    title: 'Ultimate Winks',
    description: 'Your gateway to donations and minting',
    url: 'https://dynamicwink.vercel.app',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Twitter specific meta tags */}
        <meta name="twitter:card" content="player" />
        <meta name="twitter:site" content="@ultimatewinks" /> {/* Replace with your handle */}
        <meta name="twitter:title" content="Ultimate Winks Platform" />
        <meta name="twitter:description" content="Your gateway to donations and minting on the blockchain" />
        <meta name="twitter:player" content="https://dynamicwink.vercel.app" />
        <meta name="twitter:player:width" content="360" />
        <meta name="twitter:player:height" content="560" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dvddnptpi/image/upload/v1735300147/mnpcveoxnkgkkxp9z84u.png" /> {/* Replace with your logo URL */}
      </head>
      <body>{children}</body>
    </html>
  );
}