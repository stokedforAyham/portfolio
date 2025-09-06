"use client";

import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import TypingIndicator from "./TypingIndicator";

export type Msg = { id: string; role: "user" | "bot" | "loading"; text: string };

export default function MessageBubble({ msg, index }: { msg: Msg; index: number }) {
  if (msg.role === "loading") {
    return (
      <motion.li
        key="loading"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-start pr-8 md:pr-16"
      >
        <TypingIndicator />
      </motion.li>
    );
  }

  const isUser = msg.role === "user";

  return (
    <motion.li
      key={msg.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={isUser ? "flex justify-end pl-8 md:pl-16" : "flex justify-start pr-8 md:pr-16"}
    >
      <div
        className={`text-left
          ${index === 0 ? "text-2xl md:text-3xl leading-snug" : "text-base"}
          ${isUser
            ? "bg-gradient-to-br from-gray-200/60 via-gray-200/30 to-gray-200/60 backdrop-blur-lg border border-white/40 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl px-4 py-2 max-w-[95%] md:max-w-[65%] mr-2"
            : "bg-white/10 backdrop-blur-md rounded-2xl px-4 py-2 max-w-[95%] md:max-w-[75%] text-neutral-700"
          }`}
      >
        <ReactMarkdown
          components={{
            p: (props) => <p className="mb-2 leading-relaxed last:mb-0" {...props} />,
            strong: (props) => <strong className="font-bold" {...props} />,
            ul: (props) => <ul className="list-disc ml-5 mb-2" {...props} />,
            ol: (props) => <ol className="list-decimal ml-5 mb-2" {...props} />,
            li: (props) => <li className="mb-1" {...props} />,
            a:  (props) => <a className="underline underline-offset-2" target="_blank" rel="noreferrer" {...props} />,
          }}
        >
          {msg.text}
        </ReactMarkdown>
      </div>
    </motion.li>
  );
}
