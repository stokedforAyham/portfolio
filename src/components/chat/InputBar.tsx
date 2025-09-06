"use client";

import { motion } from "framer-motion";

export default function InputBar({
  value,
  onChange,
  onSend,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
}) {
  return (
    <form
      className="flex items-center gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
    >
      <label htmlFor="prompt" className="sr-only">Message</label>
      <input
        id="prompt"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ask about my work…"
        className="flex-1 bg-transparent outline-none text-l md:text-base font-semibold placeholder:text-neutral-400"
        autoFocus
      />
      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        className="rounded-xl px-4 py-2 text-sm font-medium border border-black/10 hover:border-black/20 transition"
        aria-label="Send message"
      >
        Send
      </motion.button>
    </form>
  );
}
