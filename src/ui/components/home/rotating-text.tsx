import { useTextLoop } from "@/hooks";
import { AnimatePresence, motion } from "motion/react";
export function RotatingText() {

  const interest = useTextLoop(['Developer', 'Designer'])

  return (
    <div className="flex items-center w-40 h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={interest}
          initial={{ y: 12, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -13, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="dotted text-muted-foreground"
        >
          {interest}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
