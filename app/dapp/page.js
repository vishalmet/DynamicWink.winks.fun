'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './dapp.module.css';

export default function DappPage() {
  const searchParams = useSearchParams();
  const [iframeUrl, setIframeUrl] = useState('');

  useEffect(() => {
    const url = searchParams.get('url');
    if (url) {
      setIframeUrl(decodeURIComponent(url));
    }
  }, [searchParams]);

  if (!iframeUrl) {
    return (
      <div className="min-h-screen bg-[#2a2a2a] flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.playerContainer}>
      <iframe
        src={iframeUrl}
        allowFullScreen
        allow="web3"
        className={styles.iframe}
      />
    </div>
  );
}