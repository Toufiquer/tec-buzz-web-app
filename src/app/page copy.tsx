'use client';

/*
|-----------------------------------------
| Countdown Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: tec-buzz-web-app, April, 2026
|-----------------------------------------
*/

import { useEffect, useMemo, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
};

const Page = () => {
  const targetDate = useMemo(() => new Date('2026-04-11T23:55:00'), []);

  const getTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: true,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeCards = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 animate-pulse rounded-full bg-fuchsia-500/30 blur-3xl md:h-96 md:w-96" />
        <div className="absolute right-[-10%] top-[20%] h-72 w-72 animate-pulse rounded-full bg-cyan-500/30 blur-3xl delay-300 md:h-96 md:w-96" />
        <div className="absolute bottom-[-10%] left-[25%] h-72 w-72 animate-pulse rounded-full bg-violet-500/30 blur-3xl delay-700 md:h-96 md:w-96" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),transparent,rgba(255,255,255,0.03))]" />
      </div>

      <section className="w-full max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-10 xl:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex animate-bounce rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-1 text-sm font-medium text-fuchsia-200">
            Countdown Starts
          </span>

          <h1 className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-violet-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl xl:text-7xl">
            April 11, 2026
          </h1>

          <p className="mt-4 text-base text-slate-300 sm:text-lg md:text-xl">
            Target time: <span className="font-semibold text-white">11:55 PM</span>
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A vibrant and responsive countdown experience built for mobile, tablet, and desktop
            with glowing visuals, smooth motion, and an eye-catching layout.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:mt-14 md:grid-cols-4">
          {timeCards.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-5 text-center shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:p-6 md:p-7"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/5 to-violet-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl xl:text-6xl">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 sm:text-sm">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:mt-14">
          {timeLeft.isExpired ? (
            <div className="inline-block rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-6 py-4 text-lg font-semibold text-emerald-300 shadow-lg">
              The countdown is complete.
            </div>
          ) : (
            <div className="inline-block rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-6 py-4 text-sm font-medium text-cyan-200 shadow-lg sm:text-base">
              Stay ready — the moment is getting closer every second.
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;