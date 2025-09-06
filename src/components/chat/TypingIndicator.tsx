import { motion } from "framer-motion";


export default function TypingIndicator() {
  return (
    <div className="flex gap-1 px-2 py-1 rounded-xl bg-white/70 backdrop-blur-md border border-black/10">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 bg-gray-500 rounded-full"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
