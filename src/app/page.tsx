
"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface TimeLeft {
days: number;
hours: number;
minutes: number;
seconds: number;
}
const TimeCard = ({ value, label }: { value: number; label: string }) => {
const formattedValue = value.toString().padStart(2, "0");
return (
<div className="flex flex-col items-center gap-2 md:gap-4">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center justify-center w-20 h-24 md:w-32 md:h-40 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
<AnimatePresence mode="popLayout">
<motion.span
key={formattedValue}
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: -20, opacity: 0 }}
transition={{ duration: 0.4, ease: "easeOut" }}
className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 tabular-nums"
>
{formattedValue}
</motion.span>
</AnimatePresence>
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
</div>
</div>
<span className="text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase text-gray-400">
{label}
</span>
</div>
);
};
const BackgroundElement = () => (
<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,15,20,0)_0%,rgba(10,10,12,1)_100%)]" />
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
</div>
);
export default function Page() {
const targetDate = useMemo(() => new Date("2026-04-11T23:55:00").getTime(), []);
const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
const [isMounted, setIsMounted] = useState(false);
useEffect(() => {
setIsMounted(true);
const calculateTime = () => {
const now = new Date().getTime();
const difference = targetDate - now;

if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
};

const timer = setInterval(() => {
  setTimeLeft(calculateTime());
}, 1000);

setTimeLeft(calculateTime());

return () => clearInterval(timer);
}, [targetDate]);
if (!isMounted || !timeLeft) return null;
const isCompleted =
timeLeft.days === 0 &&
timeLeft.hours === 0 &&
timeLeft.minutes === 0 &&
timeLeft.seconds === 0;
return (
<main className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0c] text-white px-6 py-12 overflow-hidden selection:bg-cyan-500/30">
<BackgroundElement />


<motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="z-10 text-center max-w-4xl mx-auto"
  >
    <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
      <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping mr-2" />
      <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
        Coming Soon
      </span>
    </div>

    <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
      The Next Frontier
    </h1>
    
    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed font-light">
      We are building something extraordinary. Join us as we redefine the digital landscape. 
      The journey begins when the clock strikes zero.
    </p>

    {isCompleted ? (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
      >
        <h2 className="text-3xl font-bold text-cyan-400">The Event has Started!</h2>
      </motion.div>
    ) : (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-fit mx-auto">
        <TimeCard value={timeLeft.days} label="Days" />
        <TimeCard value={timeLeft.hours} label="Hours" />
        <TimeCard value={timeLeft.minutes} label="Minutes" />
        <TimeCard value={timeLeft.seconds} label="Seconds" />
      </div>
    )}

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-20 flex flex-col md:flex-row items-center justify-center gap-6"
    >
      
    </motion.div>
  </motion.div>

  <footer className="absolute bottom-8 left-0 w-full text-center z-10">
    <p className="text-gray-500 text-sm tracking-widest font-medium uppercase">
      © 2024 TEC BUZZ WEB APP • APRIL 11, 2026
    </p>
  </footer>
</main>
);
}
<style jsx global>{`
@keyframes float {
0%, 100% { transform: translateY(0); }
50% { transform: translateY(-20px); }
}
`}</style>