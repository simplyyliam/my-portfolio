import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

import { ArrowRight } from "lucide-react";

export function Project() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center justify-between p-3 w-full h-fit sm:flex-row flex-col sm:gap-0 gap-2 text-left"
    >
      <div className="flex items-center gap-2.5 w-full">

        <Avatar>
          <AvatarImage src="/favcon.png" />
          <AvatarFallback>T.S</AvatarFallback>
        </Avatar>

        {/* Arrow — desktop only */}
        <motion.div
          className="hidden sm:block"
          variants={{
            rest: {
              visibility: "hidden",
              width: 0,
              opacity: 0,
              filter: "blur(4px)",
            },
            hover: {
              visibility: "visible",
              width: 16,
              opacity: 1,
              filter: "blur(0px)",
            },
          }}
        >
          <motion.div
            variants={{
              rest: { x: -8 },
              hover: { x: 0 },
            }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.div>

        {/* Project name */}
        <motion.span
          variants={{
            rest: { x: 0 },
            hover: { x: 4 },
          }}
          className="flex gap-2 flex-wrap"
        >
          <span>ThemeStudio</span>
          <span className="dotted">Theme your VS Code with ease</span>
        </motion.span>
      </div>

      {/* Year */}
      <span className="sm:block self-end text-xs sm:text-sm">2026</span>
    </motion.button>
  );
}