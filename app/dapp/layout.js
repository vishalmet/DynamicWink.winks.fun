// app/dapp/layout.js
import { headers } from 'next/headers';

export async function generateMetadata() {
  const headersList = headers();
  const fullUrl = headersList.get('x-url') || '';
  let iframeUrl = '';

  try {
    const searchParams = new URL(fullUrl).searchParams;
    const urlParam = searchParams.get('url');
    if (urlParam) {
      iframeUrl = decodeURIComponent(urlParam);
    }
  } catch (error) {
    console.error('Error parsing URL:', error);
  }

  return {
    title: iframeUrl.includes('donate-winks') ? 'Ultimate Donate' : 'Ultimate Mint',
    description: 'Your gateway to donations and minting',
    twitter: {
      card: 'player',
      site: '@ultimatewinks',
      creator: '@ultimatewinks',
      title: iframeUrl.includes('donate-winks') ? 'Ultimate Donate' : 'Ultimate Mint',
      description: iframeUrl.includes('donate-winks') 
        ? 'Make your donation through Ultimate Winks'
        : 'Mint your unique assets through Ultimate Winks',
      player: iframeUrl, // Using the same URL as the iframe
      player_width: '360',
      player_height: '560',
      image: 'https://res.cloudinary.com/dvddnptpi/image/upload/v1735300147/mnpcveoxnkgkkxp9z84u.png',
    },
    openGraph: {
      title: iframeUrl.includes('donate-winks') ? 'Ultimate Donate' : 'Ultimate Mint',
      description: 'Your gateway to donations and minting',
      url: iframeUrl,
    },
  };
}

export default function DappLayout({ children }) {
  return <>{children}</>;
}