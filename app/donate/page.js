'use client';
import { useRouter } from "next/navigation";
import '../globals.css'

export default function DonatePage() {
  const router = useRouter();

  return (
    <div className="bg-[#2a2a2a] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => router.push('/')}
          className="bg-[#0088cc] text-[#f8f8f8] px-6 py-2 rounded hover:scale-105 transition-transform duration-300 mb-8"
        >
          Back to Home
        </button>

        <div className="bg-[#333] p-8 rounded-lg text-center">
          <h2 className="text-[#0088cc] text-2xl font-bold mb-4">Ready to Contribute?</h2>
          <p className="text-[#f8f8f8] mb-6">
            Your support can make a real difference in someone's life.
          </p>
          <button className="bg-[#0088cc] text-[#f8f8f8] px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300">
            Start Donating
          </button>
        </div>
      </div>
    </div>
  );
}