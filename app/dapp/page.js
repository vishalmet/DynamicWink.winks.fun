// app/dapp/page.js
'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

// Add this at the top level of your file
const fullScreenStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
  border: 'none',
  backgroundColor: '#000', // Dark background to match most dApps
};

function DappContent() {
  const searchParams = useSearchParams();
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    const url = searchParams.get('url');
    if (url) {
      try {
        const decodedUrl = decodeURIComponent(url);
        setIframeUrl(decodedUrl);
      } catch (error) {
        console.error('Error decoding URL:', error);
      }
    }
  }, [searchParams]);

  if (!iframeUrl) {
    return null;
  }

  return (
    <iframe
      src={iframeUrl}
      style={fullScreenStyles}
      allowFullScreen
      allow="web3"
    />
  );
}

export default function DappPage() {
  return (
    <Suspense fallback={null}>
      <DappContent />
    </Suspense>
  );
}