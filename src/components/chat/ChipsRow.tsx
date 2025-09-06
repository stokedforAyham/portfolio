"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Chip } from "../../types/chat";

export default function ChipsRow({
  chips,
  onClick,
  onHoverIn,
  onHoverOut,
}: {
  chips: Chip[];
  onClick: (chip: Chip) => void;
  onHoverIn?: (label: string, rect: DOMRect) => void;
  onHoverOut?: () => void;
}) {
  return (
    <AnimatePresence initial={false}>
      {chips.map((chip) => {
        const isBooking = chip.type === "article" && chip.slug === "booking";

        const base =
          "shrink-0 snap-start rounded-full px-3.5 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 transition";
        const normal =
          "border border-black/10 bg-white/10 backdrop-blur-lg focus-visible:ring-black/30";
        const booking =
          "border border-blue-200 bg-blue-100/60 text-blue-800 hover:shadow-sm focus-visible:ring-blue-300";

        return (
          <motion.button
            key={`${chip.type}:${chip.slug ?? chip.label}`}
            layout
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.6 }}
            onClick={() => onClick(chip)}
            onMouseEnter={(e) => onHoverIn?.(chip.label, e.currentTarget.getBoundingClientRect())}
            onMouseLeave={() => onHoverOut?.()}
            className={`${base} ${isBooking ? booking : normal}`}
            role="option"
            aria-selected={false}
            data-chip={chip.slug ?? chip.label}
          >
            {chip.label}
          </motion.button>
        );
      })}
    </AnimatePresence>
  );
}
