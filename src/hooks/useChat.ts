"use client";

import { useCallback, useEffect, useState } from "react";
import type { Msg, Chip } from "../types/chat";

const uid = () => Math.random().toString(36).slice(2);

const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL !;

// ---- helpers ----

// Ensure the booking chip is FIRST (left-most) and present if unlocked
function addBookingChip(arr: Chip[], unlocked: boolean): Chip[] {
  if (!unlocked) return arr;
  const exists = arr.some((c) => c.type === "article" && c.slug === "booking");
  if (exists) return arr;

  // 👇 adjust scroll so prepending doesn’t hide the new chip
  const container = document.querySelector('[aria-label="Suggested prompts"]') as HTMLDivElement | null;
  if (container) {
    // assume chip width + gap is ~120px, but safer to measure first if needed
    const firstChip = container.querySelector("button");
    const chipWidth = firstChip?.getBoundingClientRect().width ?? 120;
    container.scrollLeft += chipWidth + 8; // 8px = gap-2
  }

  return [{ label: "Book an Appointment", type: "article", slug: "booking" }, ...arr];
}


export function useChat() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: uid(),
      role: "bot",
      text:
        "Welcome to my profile as an AI Engineer. Curious about my work? Ask me directly or try a chip below.",
    },
  ]);

  const [chips, setChips] = useState<Chip[]>([
    { label: "Tell Me About Your Recommender System", type: "action" },
    { label: "Recommender System Deep Dive", type: "article", slug: "recommender-system" },
    { label: "LLM Recommender Blogpost", type: "article", slug: "blogpost-llm-recommender-personalization" },
    { label: "Open Resume", type: "article", slug: "resume" },
  ]);

  const [input, setInput] = useState("");

  // Prompt limit + booking unlock
  const PROMPT_LIMIT = 10;
  const [promptCount, setPromptCount] = useState(0);
  const [bookingUnlocked, setBookingUnlocked] = useState(false);
  const [limitNotified, setLimitNotified] = useState(false);     // prevent duplicate notices
  const [inactiveNotified, setInactiveNotified] = useState(false); // prevent duplicate inactivity nudges

  // Inactivity unlock + gentle nudge (set to 0 to disable; default 1 min if you changed it)
  const INACTIVITY_MS = 1 * 60 * 1000;
  useEffect(() => {
    if (INACTIVITY_MS <= 0) return;
    const t = setTimeout(() => {
      // Unlock booking + nudge once
      if (!bookingUnlocked) {
        setBookingUnlocked(true);
        setChips((prev) => addBookingChip(prev, true));
      }
      if (!inactiveNotified) {
        setInactiveNotified(true);
        setMessages((m) => [
          ...m,
          {
            id: uid(),
            role: "bot",
            text: `Still here? You can [book a meeting](${BOOKING_URL}) 📅 or keep chatting!`,
          },
        ]);
      }
    }, INACTIVITY_MS);
    return () => clearTimeout(t);
  }, [messages, bookingUnlocked, inactiveNotified]);

  const send = useCallback(
    async (text: string) => {
      const cleaned = text.trim();
      if (!cleaned) return;

      const userMsg: Msg = { id: uid(), role: "user", text: cleaned };

      // a) If already at/over limit -> DO NOT call backend; just respond with a single notice
      if (promptCount >= PROMPT_LIMIT) {
        setMessages((m) => [
          ...m,
          userMsg,
          {
            id: uid(),
            role: "bot",
            text: `You've reached the prompt limit. Want to book a meeting? [Schedule here](${BOOKING_URL}).`,
          },
        ]);
        // ensure chip is present & first
        if (!bookingUnlocked) setBookingUnlocked(true);
        setChips((prev) => addBookingChip(prev, true));
        setInput("");
        return;
      }

      // b) Below limit: proceed normally
      setMessages((m) => [...m, userMsg]);
      setInput("");

      // Increment count now; if this SEND will hit the limit, unlock booking chip
      const willHitLimit = promptCount + 1 >= PROMPT_LIMIT;
      setPromptCount((c) => c + 1);
      if (willHitLimit && !bookingUnlocked) {
        setBookingUnlocked(true);
        setChips((prev) => addBookingChip(prev, true));
      }

      // Add an empty bot bubble we stream into
      const botId = uid();
      setMessages((m) => [...m, { id: botId, role: "bot", text: "" }]);

      // Snapshot of turn before bot reply
      const turnBeforeBot: Msg[] = [...messages, userMsg];

      try {
        // Stream the answer
        const res = await fetch("/api/chat/stream", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: turnBeforeBot }),
        });

        const reader = res.body?.getReader();
        const decoder = new TextDecoder();
        if (!reader) {
          setMessages((m) =>
            m.map((msg) => (msg.id === botId ? { ...msg, text: "⚠️ No stream." } : msg))
          );
          return;
        }

        let acc = "";
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          acc += decoder.decode(value, { stream: true });
          setMessages((m) => m.map((msg) => (msg.id === botId ? { ...msg, text: acc } : msg)));
        }

        // After stream completes, fetch suggestions once
        try {
          const fullTurn: Msg[] = [...turnBeforeBot, { id: "tmp", role: "bot", text: acc }];
          const sres = await fetch("/api/chat/suggest-llm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: fullTurn }),
          });
          const sdata = await sres.json();

          if (Array.isArray(sdata.suggestions)) {
            const seen = new Set<string>();
            const uniq: Chip[] = sdata.suggestions.filter((c: Chip) => {
              const key = `${c.type}:${(c as any).slug ?? c.label}`;
              if (seen.has(key)) return false;
              seen.add(key);
              return true;
            });
            setChips(addBookingChip(uniq, bookingUnlocked || willHitLimit));
          }
        } catch {
          // ignore suggestions failure
        }

        // If THIS was the turn that reached the limit, notify ONCE (after the answer)
        if (willHitLimit && !limitNotified) {
          setLimitNotified(true);
          setMessages((m) => [
            ...m,
            {
              id: uid(),
              role: "bot",
              text: `You've reached the prompt limit. Want to book a meeting? [Schedule here](${BOOKING_URL}).`,
            },
          ]);
        }
      } catch {
        setMessages((m) =>
          m.map((msg) => (msg.id === botId ? { ...msg, text: "⚠️ Streaming failed." } : msg))
        );
      }
    },
    [messages, promptCount, bookingUnlocked, limitNotified]
  );

  return {
    messages,
    setMessages,
    chips,
    setChips,
    input,
    setInput,
    send,
    bookingUnlocked,
    promptCount,
  };
}
