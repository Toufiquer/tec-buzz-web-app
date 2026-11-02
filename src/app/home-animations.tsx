/*
|-----------------------------------------
| setting up home-animations.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/
"use client";

import { useEffect } from "react";

// AOS has no destroy API. Share one instance across route visits and Strict Mode mounts.
let initialized = false;

export default function HomeAnimations() {
  useEffect(() => {
    const root = document.querySelector("[data-home-animations]");
    if (!root) return;

    let active = true;
    let frame = 0;
    let refresh: (() => void) | undefined;
    const scheduleRefresh = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => refresh?.());
    };

    void import("aos").then(({ default: AOS }) => {
      if (!active) return;

      if (initialized) {
        AOS.refreshHard();
      } else {
        AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          offset: 48,
          once: false,
          throttleDelay: 50,
        });
        initialized = true;
      }

      refresh = () => AOS.refresh();
      void document.fonts.ready.then(() => {
        if (active) scheduleRefresh();
      });
    });

    // Keep triggers aligned when previews load or a FAQ changes the page height.
    root.addEventListener("load", scheduleRefresh, true);
    root.addEventListener("toggle", scheduleRefresh, true);

    return () => {
      active = false;
      cancelAnimationFrame(frame);
      root.removeEventListener("load", scheduleRefresh, true);
      root.removeEventListener("toggle", scheduleRefresh, true);
    };
  }, []);

  return null;
}
