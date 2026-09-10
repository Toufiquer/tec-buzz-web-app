/*
|-----------------------------------------
| setting up DemosSection.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Eye, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { SectionIntro } from "./shared";

type PortfolioProject = {
  image: string;
  imageHeight: number;
  imageWidth: number;
  name: string;
  number: string;
  type: string;
  url: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    name: "3T Apple",
    type: "E-commerce storefront",
    number: "01",
    url: "https://shop.3tapple.com",
    image: "/portfolio/portfolio-1.png",
    imageWidth: 1920,
    imageHeight: 6978,
  },
  {
    name: "WES Associates",
    type: "Corporate website",
    number: "02",
    url: "https://www.wesassociates.com",
    image: "/portfolio/portfolio-2.png",
    imageWidth: 1920,
    imageHeight: 15417,
  },
  {
    name: "TPC Engineering",
    type: "Engineering company",
    number: "03",
    url: "https://www.tpc-eng.com",
    image: "/portfolio/portfolio-3.png",
    imageWidth: 1920,
    imageHeight: 20571,
  },
  {
    name: "Future Nest Abroad",
    type: "Education consultancy",
    number: "04",
    url: "https://www.futurenestabroad.com",
    image: "/portfolio/portfolio-4.png",
    imageWidth: 1920,
    imageHeight: 12932,
  },
  {
    name: "Rajib Portfolio",
    type: "Personal portfolio",
    number: "05",
    url: "https://rajib.3tapple.com",
    image: "/portfolio/portfolio-5.png",
    imageWidth: 1920,
    imageHeight: 6211,
  },
  {
    name: "Amar Cart",
    type: "Online store",
    number: "06",
    url: "https://amar-cart.netlify.app",
    image: "/portfolio/portfolio-6.png",
    imageWidth: 1920,
    imageHeight: 9930,
  },
];

function PortfolioCard({ project, index }: { project: PortfolioProject; index: number }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [frameSize, setFrameSize] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const updateFrameSize = () => {
      setFrameSize({ height: frame.clientHeight, width: frame.clientWidth });
    };

    updateFrameSize();
    const resizeObserver = new ResizeObserver(updateFrameSize);
    resizeObserver.observe(frame);

    return () => resizeObserver.disconnect();
  }, []);

  const renderedImageHeight = frameSize.width * (project.imageHeight / project.imageWidth);
  const scrollDistance = Math.min(0, frameSize.height - renderedImageHeight);
  const previewDuration = Math.min(9, Math.max(3, Math.abs(scrollDistance) / 850));
  const domain = new URL(project.url).hostname.replace(/^www\./, "");
  const shouldScrollPreview = isPreviewing && scrollDistance < 0 && !reduceMotion;

  return (
    <motion.a
      aria-label={`Open ${project.name} live website`}
      className="group relative block focus:outline-none"
      href={project.url}
      initial={{ opacity: 0, y: 42 }}
      onBlur={() => setIsPreviewing(false)}
      onFocus={() => setIsPreviewing(true)}
      onMouseEnter={() => setIsPreviewing(true)}
      onMouseLeave={() => setIsPreviewing(false)}
      rel="noopener noreferrer"
      target="_blank"
      transition={{ duration: 0.75, delay: (index % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <article className="relative overflow-hidden rounded-sm border border-[#b7d7fa] bg-white p-2.5 shadow-[0_22px_55px_rgba(19,74,139,0.12)] transition-[box-shadow,transform] duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(19,74,139,0.2)] group-focus-visible:-translate-y-2 group-focus-visible:ring-4 group-focus-visible:ring-[#1687f7]/25">
        <div className="absolute inset-x-10 -top-24 h-36 rounded-sm bg-[#5db4ff]/25 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#0a1e3e]" ref={frameRef}>
          <motion.div
            animate={{ y: shouldScrollPreview ? scrollDistance : 0 }}
            className="absolute inset-x-0 top-0 will-change-transform"
            transition={{
              duration: shouldScrollPreview ? previewDuration : 0.65,
              ease: shouldScrollPreview ? "linear" : "easeOut",
            }}
          >
            <Image
              alt={`${project.name} full-page website preview`}
              className="block h-auto w-full max-w-none"
              height={project.imageHeight}
              sizes="(min-width: 768px) 50vw, 100vw"
              src={project.image}
              width={project.imageWidth}
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-[linear-gradient(180deg,rgba(6,25,55,0.82),rgba(6,25,55,0))] px-3 py-3 text-white">
            <span className="flex items-center gap-1.5 rounded-sm border border-white/25 bg-[#071a38]/60 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] backdrop-blur-md">
              <span className="flex gap-1">
                <span className="size-1.5 rounded-sm bg-[#ff786c]" />
                <span className="size-1.5 rounded-sm bg-[#ffc95b]" />
                <span className="size-1.5 rounded-sm bg-[#69d6a0]" />
              </span>
              LIVE PREVIEW
            </span>
            <span className="rounded-sm bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] backdrop-blur-md">
              {project.number} / 06
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-1.5 items-end justify-between bg-[linear-gradient(0deg,rgba(5,22,50,0.92),rgba(5,22,50,0))] px-4 pb-4 pt-16 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
            <span className="flex items-center gap-2 rounded-sm border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <MousePointer2 className="size-3.5" />
              Hover to tour the full page
            </span>
            <span className="grid size-9 place-items-center rounded-sm bg-white text-[#0b3972] shadow-lg">
              <Eye className="size-4" />
            </span>
          </div>
        </div>

        <div className="relative flex items-end justify-between gap-4 px-2 pb-2 pt-5">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1687f7]">{project.type}</p>
            <h3 className="mt-1.5 truncate text-xl font-extrabold tracking-[-0.035em] text-[#092b5b] sm:text-[1.35rem]">
              {project.name}
            </h3>
            <p className="mt-1 truncate text-sm text-slate-500">{domain}</p>
          </div>
          <span className="mb-0.5 grid size-10 shrink-0 place-items-center rounded-sm border border-[#c9e3ff] bg-[#eef7ff] text-[#0877e8] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#0877e8] group-hover:bg-[#0877e8] group-hover:text-white group-focus-visible:rotate-45 group-focus-visible:border-[#0877e8] group-focus-visible:bg-[#0877e8] group-focus-visible:text-white">
            <ArrowUpRight className="size-[1.1rem]" />
          </span>
        </div>
      </article>
    </motion.a>
  );
}

export function DemosSection() {
  return (
    <section className="relative overflow-hidden bg-[#edf7ff] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 xl:px-0" id="demos">
      <div className="pointer-events-none absolute left-[5%] top-24 size-72 rounded-sm bg-[#a8dbff]/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-96 rounded-sm bg-[#b7cfff]/35 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionIntro
            description="প্রতিটি প্রজেক্টে ব্র্যান্ড, ব্যবহারকারীর পথ এবং ব্যবসার প্রয়োজনকে একসাথে সাজানো হয়েছে। কার্ডে hover করে পুরো ওয়েবসাইটটি ঘুরে দেখুন।"
            title="আমাদের কাজ নিজেই কথা বলে"
          />
          <motion.div
            className="inline-flex w-fit items-center gap-3 rounded-sm border border-[#c8e2fb] bg-white/80 px-4 py-2.5 text-sm font-bold text-[#16477f] shadow-sm backdrop-blur"
            initial={{ opacity: 0, x: 18 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="grid size-7 place-items-center rounded-sm bg-[#dff1ff] text-xs text-[#0877e8]">06</span>
            Selected live projects
          </motion.div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-7" id="portfolio-grid">
          {portfolioProjects.map((project, index) => (
            <PortfolioCard index={index} key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
