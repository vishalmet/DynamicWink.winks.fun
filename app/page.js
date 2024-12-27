'use client';
import { useRouter } from "next/navigation";
import './globals.css'

export default function Home() {
  const router = useRouter();

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="bg-[#2a2a2a] min-h-screen flex flex-col items-center justify-start pt-20">
      <div className="text-center mb-16">
        <h1 className="text-[#f8f8f8] text-6xl font-bold mb-4">Ultimate Platform</h1>
        <p className="text-[#f8f8f8] text-xl mb-2">Choose Your Path</p>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Welcome to the future of digital interactions. Whether you want to support amazing causes
          or create unique digital assets, we've got you covered.
        </p>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col items-center">
          <button 
            onClick={() => handleNavigation('/donate')}
            className="bg-[#0088cc] w-64 text-[#f8f8f8] p-10 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Ultimate Donate
          </button>
          <p className="text-gray-400 mt-4 max-w-xs text-center">
            Support causes and make a real difference
          </p>
        </div>

        <div className="flex flex-col items-center">
          <button 
            onClick={() => handleNavigation('/mint')}
            className="bg-[#2647ff] w-64 text-[#f8f8f8] p-10 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Ultimate Mint
          </button>
          <p className="text-gray-400 mt-4 max-w-xs text-center">
            Create and own unique digital assets
          </p>
        </div>
      </div>
    </div>
  );
}