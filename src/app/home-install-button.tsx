/*
|-----------------------------------------
| setting up home-install-button.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TecBuzz, 2 November, 2026
|-----------------------------------------
*/
"use client";

import { Download } from "lucide-react";
import { useEffect, useId, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function HomeInstallButton() {
  const [installEvent, setInstallEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [message, setMessage] = useState("");
  const messageId = useId();

  useEffect(() => {
    const displayMode = window.matchMedia("(display-mode: standalone)");
    const updateDisplayMode = () => {
      setInstalled(displayMode.matches || (navigator as Navigator & { standalone?: boolean }).standalone === true);
    };
    queueMicrotask(updateDisplayMode);

    const captureInstall = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as BeforeInstallPromptEvent);
      setMessage("");
    };
    const completeInstall = () => {
      setInstalled(true);
      setInstallEvent(null);
      setMessage("TecBuzz is installed.");
    };

    window.addEventListener("beforeinstallprompt", captureInstall);
    window.addEventListener("appinstalled", completeInstall);
    displayMode.addEventListener("change", updateDisplayMode);

    if ("serviceWorker" in navigator) {
      void navigator.serviceWorker.register("/service-worker.js", { scope: "/", updateViaCache: "none" }).catch(() => {
        // Manual installation remains available when service workers are restricted.
      });
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", captureInstall);
      window.removeEventListener("appinstalled", completeInstall);
      displayMode.removeEventListener("change", updateDisplayMode);
    };
  }, []);

  async function install() {
    if (!installEvent) {
      const isIOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      setMessage(
        isIOS
          ? "In Safari, tap Share, then Add to Home Screen."
          : "In a supported browser, open the menu and choose Install app or Add to Home Screen. In Safari on Mac, choose File → Add to Dock.",
      );
      return;
    }

    setInstalling(true);
    setInstallEvent(null);
    setMessage("");
    try {
      await installEvent.prompt();
      const choice = await installEvent.userChoice;
      setMessage(
        choice.outcome === "accepted"
          ? "Installation started. Follow your browser’s instructions."
          : "Installation dismissed. You can install later from your browser menu.",
      );
    } catch {
      setMessage("Could not open installation. Please use your browser menu to install the app.");
    } finally {
      setInstalling(false);
    }
  }

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={() => void install()}
        disabled={installed || installing}
        aria-describedby={message ? messageId : undefined}
        className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-[#0755EA] px-4 py-2.5 text-sm font-semibold text-[#0755EA] transition-colors hover:bg-blue-50 disabled:cursor-default disabled:opacity-60"
      >
        <Download size={17} aria-hidden="true" />
        {installed ? "Installed" : installing ? "Installing…" : "Install app"}
      </button>
      <p
        id={messageId}
        role="status"
        className={message ? "mt-3 max-w-72 text-xs leading-5 text-slate-600" : "sr-only"}
      >
        {message}
      </p>
    </div>
  );
}
