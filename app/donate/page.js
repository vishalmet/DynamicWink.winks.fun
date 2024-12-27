'use client';
import { useRouter } from "next/navigation";
import { useState } from 'react';
import '../globals.css'

export default function DonatePage() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const generateLink = () => {
    if (!walletAddress.trim()) {
      alert('Please enter a wallet address');
      return;
    }

    const targetUrl = `https://donate-winks.vercel.app/?useradd=${encodeURIComponent(walletAddress)}`;
    const baseUrl = window.location.hostname === 'localhost' ? 'localhost:3000' : 'dynamicwink.vercel.app';
    const protocol = window.location.hostname === 'localhost' ? 'http://' : 'https://';
    const fullUrl = `${protocol}${baseUrl}/dapp?url=${encodeURIComponent(targetUrl)}&t=${Date.now()}`;
    
    setGeneratedLink(fullUrl);

    // Copy to clipboard
    navigator.clipboard.writeText(fullUrl)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));
  };

  return (
    <div className="bg-[#2a2a2a] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => router.push('/')}
          className="bg-[#0088cc] text-[#f8f8f8] px-6 py-2 rounded hover:scale-105 transition-transform duration-300 mb-8"
        >
          Back to Home
        </button>

        <div className="bg-[#333] p-8 rounded-lg">
          <h2 className="text-[#0088cc] text-2xl font-bold mb-4 text-center">Ready to Contribute?</h2>
          <p className="text-[#f8f8f8] mb-6 text-center">
            Your support can make a real difference in someone's life.
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="wallet" className="text-[#f8f8f8] text-sm">
                Enter Wallet Address:
              </label>
              <input
                id="wallet"
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                className="bg-[#444] text-[#f8f8f8] px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0088cc]"
                placeholder="Enter your wallet address"
              />
            </div>

            <button
              onClick={generateLink}
              className="w-full bg-[#0088cc] text-[#f8f8f8] px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Generate Link
            </button>

            {generatedLink && (
              <div className="mt-4 p-4 bg-[#444] rounded-lg">
                <p className="text-[#f8f8f8] text-sm mb-2">Generated Link:</p>
                <p className="text-[#0088cc] break-all">{generatedLink}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}