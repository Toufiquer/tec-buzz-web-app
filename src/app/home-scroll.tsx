/*
|-----------------------------------------
| setting up home-scroll.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/
"use client";

import { useEffect } from "react";

export default function HomeScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let targetY = window.scrollY;
    let lastWrittenY = window.scrollY;
    let previousTime = 0;

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      targetY = window.scrollY;
    };
    const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const clamp = (position: number) => Math.max(0, Math.min(maxScroll(), position));
    const writePosition = (position: number) => {
      lastWrittenY = position;
      // An explicit instant write avoids stacking the browser's CSS smooth scroll on each animation frame.
      window.scrollTo({ top: position, behavior: "instant" });
    };
    const animate = (time: number) => {
      targetY = clamp(targetY);
      const distance = targetY - window.scrollY;
      if (Math.abs(distance) < 0.5) {
        writePosition(targetY);
        stop();
        return;
      }
      const elapsed = previousTime ? Math.min(40, time - previousTime) : 16;
      previousTime = time;
      const step = distance * (1 - Math.exp(-elapsed / 85));
      // Browsers can round scroll positions to whole pixels; snap before a subpixel step stalls the loop.
      if (Math.abs(step) < 0.5) {
        writePosition(targetY);
        stop();
        return;
      }
      writePosition(window.scrollY + step);
      frame = requestAnimationFrame(animate);
    };

    const hasNativeScrollTarget = (target: EventTarget | null, delta: number) => {
      if (!(target instanceof Element)) return false;
      if (target.closest("input, textarea, select, [contenteditable], [data-native-scroll]")) return true;
      for (
        let element: Element | null = target;
        element && element !== document.body;
        element = element.parentElement
      ) {
        const overflow = getComputedStyle(element).overflowY;
        if (!/(auto|scroll)/.test(overflow) || element.scrollHeight <= element.clientHeight + 1) continue;
        if (delta > 0 && element.scrollTop + element.clientHeight < element.scrollHeight - 1) return true;
        if (delta < 0 && element.scrollTop > 0) return true;
      }
      return false;
    };
    const onWheel = (event: WheelEvent) => {
      if (
        reducedMotion.matches ||
        event.defaultPrevented ||
        !event.cancelable ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        event.deltaY === 0 ||
        hasNativeScrollTarget(event.target, event.deltaY)
      ) {
        stop();
        return;
      }
      // Leave any dialog or menu scroll lock in control of the document.
      if (
        [document.body, document.documentElement].some((element) => getComputedStyle(element).overflowY === "hidden")
      ) {
        stop();
        return;
      }
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      targetY = clamp((frame ? targetY : window.scrollY) + event.deltaY * unit);
      if (!frame && Math.abs(targetY - window.scrollY) < 0.5) return;
      event.preventDefault();
      if (!frame) {
        previousTime = 0;
        frame = requestAnimationFrame(animate);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Escape"].includes(event.key)) stop();
    };
    const onClick = (event: MouseEvent) => {
      if (event.target instanceof Element && event.target.closest("a[href]")) stop();
    };
    const onScroll = () => {
      // A native scrollbar drag or another script always takes precedence over our pending wheel target.
      if (frame && Math.abs(window.scrollY - lastWrittenY) > 3) stop();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", stop);
    reducedMotion.addEventListener("change", stop);

    return () => {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", stop);
      reducedMotion.removeEventListener("change", stop);
    };
  }, []);

  return null;
}
