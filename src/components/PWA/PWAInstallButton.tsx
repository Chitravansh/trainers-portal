"use client";

import { useEffect, useState } from "react";

let deferredPrompt: any = null;

export default function PWAInstallButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // stop auto prompt
      deferredPrompt = e;
      setShowButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("PWA installed");
    }

    deferredPrompt = null;
    setShowButton(false);
  };

  if (!showButton) return null;

  return (
    <button
      onClick={installApp}
      className="fixed bottom-6 right-6 bg-teal-600 text-white px-5 py-3 rounded-lg shadow-lg"
    >
      Install App
    </button>
  );
}
