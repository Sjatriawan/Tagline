import Link from "next/link"
import Image from "next/image"
import { Check, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import AppFeatures from "@/components/app-features"
import AppScreenshots from "@/components/app-screenshots"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800/30 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-2xl tracking-wide">TAGLINE</h1>
        <div className="flex items-center gap-3">
          <div className="bg-blue-900/60 px-4 py-1 rounded-full text-sm font-semibold border border-blue-500/30">
            PRO
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
            </svg>
          </button>
        </div>
      </header>
      
      <main className="flex-1 px-4">
        {/* Hero Section */}
        <section className="py-10">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold mb-3">What do you<br />want to caption?</h1>
            <p className="text-gray-400">
              Social media captions generator with AI.
            </p>
          </div>
          
          <div className="space-y-3 mt-8">
            <button className="w-full bg-blue-900/40 hover:bg-blue-900/60 text-left px-5 py-4 rounded-full border border-blue-800/30">
              Just had an amazing coffee at my favorite cafe ☕
            </button>
            
            <button className="w-full bg-blue-900/40 hover:bg-blue-900/60 text-left px-5 py-4 rounded-full border border-blue-800/30">
              Launched my new fitness program today! 💪
            </button>
            
            <button className="w-full bg-blue-900/40 hover:bg-blue-900/60 text-left px-5 py-4 rounded-full border border-blue-800/30">
              Beautiful sunset at the beach 🌅
            </button>
            
            <button className="w-full bg-blue-900/40 hover:bg-blue-900/60 text-left px-5 py-4 rounded-full border border-blue-800/30">
              New product launch coming soon!
            </button>
            
            <button className="w-full bg-blue-900/40 hover:bg-blue-900/60 text-left px-5 py-4 rounded-full border border-blue-800/30">
              Behind the scenes of today's photoshoot 📸
            </button>
          </div>
        </section>

        {/* Input Area */}
        <div className="fixed bottom-16 left-0 right-0 px-4">
          <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-4">
            <textarea 
              placeholder="Write something about your post..." 
              className="w-full bg-transparent text-gray-400 outline-none resize-none"
              rows={2}
            />
            <div className="flex justify-end mt-2 space-x-4">
              <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </button>
              <button className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="h-12 border-t border-gray-800/30 flex justify-center items-center">
        <div className="w-1/3 h-1 bg-white rounded-full"></div>
      </footer>
    </div>
  )
}

