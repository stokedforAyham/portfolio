"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

import { useChat } from "../hooks/useChat";
import { useOverlay } from "../hooks/useOverlay";

import MessageBubble from "../components/chat/MessageBubble";
import ChipsRow from "../components/chat/ChipsRow";
import InputBar from "../components/chat/InputBar";

import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

import type { Chip } from "../types/chat";

export default function Page() {
  const { messages, chips, input, setInput, send, bookingUnlocked } = useChat();
  const { overlayOpen, overlayContent, openArticle, closeOverlay } = useOverlay();

  // for the chip hover "lift" clone (so it pops above the scroll container)
  const [hoveredChip, setHoveredChip] = useState<null | { label: string; rect: DOMRect }>(null);

  const handleChipClick = async (chip: Chip) => {
    if (chip.type === "action") {
      await send(chip.label);
    } else if (chip.type === "article" && chip.slug) {
      await openArticle(chip.slug);
    }
  };

  const endRef = useRef<HTMLDivElement>(null);            // vertical scroll anchor
  const chipsScrollRef = useRef<HTMLDivElement>(null);    // chips row scroller
  const didScrollForBookingRef = useRef(false);           // run-once guard


  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  useEffect(() => {
    if (!bookingUnlocked || didScrollForBookingRef.current) return;
    didScrollForBookingRef.current = true;

    const container = chipsScrollRef.current;
    if (!container) return;

    const bookingEl = container.querySelector('[data-chip="booking"]') as HTMLElement | null;
    if (bookingEl?.scrollIntoView) {
      bookingEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      // tiny nudge so it’s not flush with the edge
      container.scrollBy({ left: -12, behavior: "smooth" });
    } else {
      // fallback: snap to left
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [bookingUnlocked]);


  const sanitizeSchema = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames || []), "iframe"],
    attributes: {
      ...(defaultSchema.attributes || {}),
      iframe: [
        ["src"],
        ["width"],
        ["height"],
        ["style"],
        ["frameborder"],
        ["scrolling"],
        ["loading"],
        ["referrerpolicy"],
        ["allow"],
        ["allowfullscreen"],
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* background orb */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[560px] w-[560px] rounded-full bg-blue-500/30 blur-3xl" />

      {/* header */}
      <header className="fixed inset-x-0 top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Alaiham Saiedi</h1>
          <span className="text-sm text-neutral-500 hidden md:inline"></span>
        </div>
      </header>

      {/* chat stream */}
      <main
        className={`mx-auto max-w-4xl px-10 pt-24 pb-[200px] md:pb-[230px] h-[100dvh] overflow-y-auto ${messages.length === 1 ? "flex items-center justify-center" : ""
          }`}
        aria-label="Chat conversation"
      >
        <LayoutGroup>
          <ul className={`space-y-6 ${messages.length === 1 ? "w-full" : ""}`}>
            <AnimatePresence initial={false}>
              {messages.map((m, idx) => (
                <MessageBubble key={m.id} msg={m} index={idx} />
              ))}
              <div ref={endRef} />
            </AnimatePresence>
          </ul>
        </LayoutGroup>
      </main>

      {/* fixed bottom: input + chips */}
      <div className="fixed inset-x-0 bottom-0 z-40">
        {/* input bar */}
        <div className="bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t border-black/5">
          <div className="mx-auto max-w-3xl px-10 py-3">
            <InputBar value={input} onChange={setInput} onSend={() => send(input)} />
          </div>
        </div>

        {/* chips row */}
        <div className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-t border-black/5">
          <div className="mx-auto max-w-5xl px-1 py-8">
            <div
              ref={chipsScrollRef}
              className="flex gap-2 overflow-x-auto pb-2 snap-x"
              role="listbox"
              aria-label="Suggested prompts"
            >
              <ChipsRow
                chips={chips}
                onClick={handleChipClick}
                onHoverIn={(label, rect) => setHoveredChip({ label, rect })}
                onHoverOut={() => setHoveredChip(null)}
              />
            </div>
          </div>
        </div>

      </div>

      {/* hover-lift clone (so chips pop above the scroll container without clipping) */}
      {hoveredChip && (
        <div className="pointer-events-none fixed inset-0 z-50">
          <motion.button
            layout
            initial={{ scale: 1, boxShadow: "0 0 0 rgba(0,0,0,0)" }}
            animate={{ scale: 1.06, boxShadow: "0 8px 30px rgba(0,0,0,0.08)" }}
            transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.6 }}
            className="rounded-full border border-black/10 px-3.5 py-2 text-sm font-medium bg-white/10 backdrop-blur-lg"
            style={{
              position: "fixed",
              top: hoveredChip.rect.top,
              left: hoveredChip.rect.left,
              width: hoveredChip.rect.width,
              height: hoveredChip.rect.height,
            }}
          >
            {hoveredChip.label}
          </motion.button>
        </div>
      )}

      {/* overlay */}
      <AnimatePresence>
        {overlayOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur">
            <div className="relative mx-4 my-8 w-full max-w-3xl rounded-2xl bg-white shadow-xl">
              <button
                onClick={closeOverlay}
                className="absolute right-4 top-4 text-neutral-600 hover:text-neutral-800"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="max-h-[85vh] overflow-y-auto p-6 text-sm text-neutral-800">
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
                  components={{
                    p: (props) => <p className="mb-2 leading-relaxed last:mb-0" {...props} />,
                    strong: (props) => <strong className="font-bold" {...props} />,
                    ul: (props) => <ul className="mb-2 ml-5 list-disc" {...props} />,
                    ol: (props) => <ol className="mb-2 ml-5 list-decimal" {...props} />,
                    li: (props) => <li className="mb-1" {...props} />,
                    a: (props) => <a className="underline underline-offset-2" target="_blank" rel="noreferrer" {...props} />,
                  }}
                >
                  {overlayContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
