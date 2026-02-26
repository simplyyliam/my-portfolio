import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

import { ArrowRight } from "lucide-react";

export function Project() {
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="flex items-center justify-between p-3 w-full h-fit"
    >
      <div className="flex items-center gap-2.5">
        <Avatar>
          <AvatarImage src="/favcon.png" />
          <AvatarFallback>T.S</AvatarFallback>
        </Avatar>
        {/* Arrow */}
        <motion.div
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
              rest: { x: -8  },
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
        >
          ThemeStudio
        </motion.span>
      </div>
      <span>2026</span>
    </motion.button>
  );
}
