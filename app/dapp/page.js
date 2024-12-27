// app/dapp/page.js
'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

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

  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
          allow="web3"
        />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default function DappPage() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading dApp...</p>
      </div>
    }>
      <DappContent />
    </Suspense>
  );
}