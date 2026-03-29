"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Download, ShieldCheck, Zap, Server, ChevronRight } from "lucide-react";
import animationData from "../public/animation.json"; // Your Lottie file

export default function Home() {
  // Update this with your actual GitHub Release APK link
  const apkDownloadUrl = "https://github.com/AadiBolics/KShuttle_releases/releases/download/v1.0.6/app-release.apk";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-hidden font-sans">
      
      {/* 🟢 PREMIUM GLOWING BACKGROUND ORBS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="KShuttle Logo" width={32} height={32} />
            <span className="font-bold text-xl tracking-tight">KShuttle</span>
          </div>
          <a href="https://github.com/yourusername/kshuttle" target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            View Source
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 text-sm font-medium text-indigo-300">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Live at IIIT Kottayam
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Campus transit, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              finally in real-time.
            </span>
          </h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Zero-latency coordination, stealth background chats, and instant global alerts. Never miss a ride to the station again.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href={apkDownloadUrl}>
              <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)]">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download APK
              </button>
            </a>
            <p className="text-sm text-zinc-500 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Safe & Verified Build
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative z-10"
        >
          {/* LOTTIE ANIMATION WRAPPER */}
          <div className="relative p-2 rounded-[2.5rem] border border-white/10 bg-zinc-900/50 backdrop-blur-2xl shadow-2xl">
            <Lottie animationData={animationData} loop={true} className="w-full h-auto" />
            {/* Optional: Overlay your Hero screenshot slightly off-center for depth */}
            <Image src="/hero-live.png" alt="Live Feed" width={250} height={500} className="absolute -bottom-10 -left-10 rounded-[2rem] border border-white/10 shadow-2xl hidden md:block" />
          </div>
        </motion.div>
      </section>

      {/* ZIG-ZAG FEATURES */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-32">
        
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Create a bus in <span className="text-indigo-400">3 taps.</span></h2>
            <p className="text-zinc-400 text-lg">Heading to the railway station or into town? Instantly propose a route, set the vehicle capacity, and let the network fill the empty seats autonomously.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-2xl rounded-full" />
            <Image src="/feature-create.png" alt="Create Trip" width={300} height={600} className="mx-auto rounded-[2rem] border border-white/10 shadow-2xl relative z-10" />
          </motion.div>
        </div>

        {/* Feature 2: Global Alert */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Targeted whispers. <br/><span className="text-amber-400">Global shouts.</span></h2>
            <p className="text-zinc-400 text-lg mb-6">KShuttle respects your attention. Set your primary hostel to only get pinged when a cab is relevant to you.</p>
            <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl h-fit"><Zap className="w-6 h-6 text-amber-400" /></div>
              <div>
                <h4 className="font-semibold text-white">The Global Alert</h4>
                <p className="text-sm text-zinc-500 mt-1">In a rush? Toggle Global Alert to instantly ping every active user on campus to fill your cab immediately.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 relative">
            <Image src="/feature-hostel.png" alt="Hostels" width={300} height={600} className="mx-auto rounded-[2rem] border border-white/10 shadow-2xl relative z-10" />
          </motion.div>
        </div>

        {/* Feature 3: Stealth Chat */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Stealth coordination, <span className="text-blue-400">built-in.</span></h2>
            <p className="text-zinc-400 text-lg">Once you're in a cab, get a private, real-time walkie-talkie chat with your fellow passengers. Engineered with headless data isolates so you can coordinate without spamming your phone's status bar.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl rounded-full" />
            <Image src="/feature-chat.png" alt="Chat" width={300} height={600} className="mx-auto rounded-[2rem] border border-white/10 shadow-2xl relative z-10" />
          </motion.div>
        </div>

      </section>

      {/* INSTALLATION GUIDE */}
      <section className="py-24 bg-zinc-900/30 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How to install KShuttle</h2>
            <p className="text-zinc-400">Bypassing the Play Store means getting updates instantly.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Download", desc: "Tap the download button to grab the official, signed KShuttle APK directly from our servers." },
              { step: "02", title: "Allow Access", desc: "When prompted by Android, tap 'Settings' and toggle on 'Allow from this source'. It is completely safe." },
              { step: "03", title: "Sign In & Ride", desc: "Open the app, authenticate with your Google account, and never miss a bus again." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
                <div className="text-4xl font-bold text-white/10 mb-6">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center relative z-10">
        <div className="flex justify-center mb-6"><Server className="w-6 h-6 text-zinc-600" /></div>
        <p className="text-zinc-400 font-medium">Engineered for IIIT Kottayam.</p>
        <p className="text-zinc-600 text-sm mt-2">Built with ☕ by Aadi.</p>
      </footer>

    </div>
  );
}