"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const iframeId = params.get("id");

    const sendHeight = () => {
      const height = document.body.scrollHeight;
      window.parent.postMessage({ type: "setHeight", height, iframeId }, "*");
    };

    sendHeight();
    const interval = setInterval(sendHeight, 300);
    setTimeout(() => clearInterval(interval), 2000);

    const observer = new ResizeObserver(sendHeight);
    observer.observe(document.body);

    document.body.style.overflow = "hidden";

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.type === "theme") {
        const isDark = e.data.value === "dark";
        document.documentElement.classList.toggle("dark", isDark);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
