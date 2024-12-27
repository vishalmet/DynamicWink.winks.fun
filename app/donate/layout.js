// app/donate/layout.js
export const metadata = {
    title: 'Ultimate Donate | Make a Difference',
    description: 'Support amazing causes and make a real difference in the world',
    openGraph: {
      title: 'Ultimate Donate | Make a Difference',
      description: 'Support amazing causes and make a real difference in the world',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ultimate Donate | Make a Difference',
      description: 'Support amazing causes and make a real difference in the world',
      creator: '@yourtwitterhandle',
      images: ['/path-to-donate-image.jpg'], // Add your donate page image path
    },
  };
  
  export default function DonateLayout({ children }) {
    return <>{children}</>;
  }
  