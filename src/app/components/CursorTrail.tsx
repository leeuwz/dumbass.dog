"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cursoreffects?: {
      fairyDustCursor: (options: { colors: string[] }) => void;
    };
  }
}

export default function CursorTrail() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/cursor-effects@latest/dist/browser.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.cursoreffects) {
        window.cursoreffects.fairyDustCursor({
          colors: ["#8a8a8a", "#616161", "#cccccc"]
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'url(/assets/pointer.png) 16 16, auto';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleClick = () => {
      const audio = new Audio("/assets/click.mp3");
      audio.volume = 0.5;
      audio.play();
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}