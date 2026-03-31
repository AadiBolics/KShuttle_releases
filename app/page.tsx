"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Download, ShieldCheck, Server, Globe, Lock, Mail } from "lucide-react";
import animationData from "../public/animation.json"; // Your Lottie file

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Home() {
  const apkDownloadUrl =
    "https://github.com/AadiBolics/KShuttle_releases/releases/download/v1.0.6/app-release.apk";
  const webAppUrl = "https://kshuttle.app.aadinadhan.me";

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30 overflow-hidden font-sans">
      {/* 🟢 PREMIUM GLOWING BACKGROUND ORBS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="KShuttle Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl tracking-tight">KShuttle</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
            <Lock className="w-3 h-3 text-indigo-400" />
            @iiitkottayam.ac.in Only
          </div>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/10 backdrop-blur-md mb-6 text-sm font-medium text-green-400">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Campus Dispatch is Live
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Campus transit, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              on autopilot.
            </span>
          </h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Stop guessing when the Tempo will arrive. Claim your seat, let our
            autonomous system ping the drivers, and walk outside exactly when
            the badge turns green.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-6">
            <a href={webAppUrl} target="_blank" rel="noreferrer">
              <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Launch Web App
              </button>
            </a>
            <a href={apkDownloadUrl}>
              <button className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download APK
              </button>
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              Strictly restricted to verified{" "}
              <strong>@iiitkottayam.ac.in</strong> accounts.
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 w-full max-w-md relative z-10"
        >
          <div className="relative p-2 rounded-[2.5rem] border border-white/10 bg-zinc-900/50 backdrop-blur-2xl shadow-2xl">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* ZIG-ZAG FEATURES */}
      <section className="py-24 max-w-7xl mx-auto px-6 space-y-32">
        {/* Feature 1: The Certainty */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              Wait inside. <span className="text-green-400">Not outside.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              No more standing in the heat wondering if a cab is actually
              coming. Keep an eye on the live feed. Don't leave your room until
              the badge turns green and the driver is pulling up.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent blur-2xl rounded-full" />
            <Image
              src="/feature-ontheway.png"
              alt="On The Way Badge"
              width={400}
              height={200}
              className="mx-auto rounded-2xl border border-white/10 shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Feature 2: The Handoff */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              You tap Create. <br />
              <span className="text-amber-400">We ping the drivers.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Zero phone calls required. When you propose a trip, our backend
              automatically dispatches targeted push notifications to the
              specific Tempo drivers assigned to your hostel.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent blur-2xl rounded-full" />
            <Image
              src="/feature-accept.png"
              alt="Driver Accept"
              width={400}
              height={200}
              className="mx-auto rounded-2xl border border-white/10 shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Feature 3: The Seat Lock */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
              Claim your seat, <span className="text-blue-400">instantly.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Avoid the anxiety of walking to the gates just to find the bus is
              already at 15/15 capacity. Watch the cab fill up in real-time and
              lock in your spot with one tap.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent blur-2xl rounded-full" />
            <Image
              src="/feature-joined.png"
              alt="Joined Seat"
              width={400}
              height={200}
              className="mx-auto rounded-2xl border border-white/10 shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER & CREDITS */}
      <footer className="pt-16 pb-8 border-t border-white/10 relative z-10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Server className="w-4 h-4" />
            <span>KShuttle Engine v1.0 • IIIT Kottayam</span>
          </div>

          {/* ARCHITECT CREDITS */}
          <div className="flex flex-col items-center md:items-end text-sm">
            <p className="text-zinc-400 mb-2 font-medium">
              System Architect & Lead Developer
            </p>
            <h3 className="text-white font-bold text-lg mb-2">
              Aadinadhan A R
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/aadi-iiitk"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:aadinadhanr24bcs0143@iiitkottayam.ac.in"
                className="flex items-center gap-1 text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
