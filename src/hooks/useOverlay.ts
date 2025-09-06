"use client";


import { useState } from "react";

export function useOverlay() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayContent, setOverlayContent] = useState("");

  const openArticle = async (slug: string) => {
    try {
      const res = await fetch(`/api/article/${slug}`);
      const data = await res.text();
      setOverlayContent(data || "Not found.");
      setOverlayOpen(true);
    } catch {
      setOverlayContent("⚠️ Failed to load article.");
      setOverlayOpen(true);
    }
  };

  const closeOverlay = () => setOverlayOpen(false);

  return { overlayOpen, overlayContent, openArticle, closeOverlay, setOverlayContent };
}
