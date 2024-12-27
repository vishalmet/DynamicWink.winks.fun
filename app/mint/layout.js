// app/mint/layout.js
export const metadata = {
    title: 'Ultimate Mint | Create Digital Assets',
    description: 'Mint unique digital assets on our platform',
    openGraph: {
      title: 'Ultimate Mint | Create Digital Assets',
      description: 'Mint unique digital assets on our platform',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ultimate Mint | Create Digital Assets',
      description: 'Mint unique digital assets on our platform',
      creator: '@yourtwitterhandle',
      images: ['/path-to-mint-image.jpg'], 
    },
  };
  
  export default function MintLayout({ children }) {
    return <>{children}</>;
  }