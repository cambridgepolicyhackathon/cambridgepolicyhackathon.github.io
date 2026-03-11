import { ReactNode } from "react";

import { motion } from "framer-motion";

export interface FadeUpProps {
  children: ReactNode;
  duration: number;
  delay?: number;
  /** When true, animate when element enters viewport. Use viewportOnce so it only runs once (e.g. on first visit to page). */
  whileInView?: boolean;
  /** When true and whileInView is true, animation runs only the first time the element enters the viewport. Default true. */
  viewportOnce?: boolean;
}

export default function FadeUp({
  children,
  duration,
  delay,
  whileInView = false,
  viewportOnce = true,
}: FadeUpProps) {
  const animation = {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: "easeInOut",
      delay,
    },
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={whileInView ? animation : {}}
      viewport={whileInView && viewportOnce ? { once: true } : undefined}
      animate={!whileInView ? animation : {}}
    >
      {children}
    </motion.div>
  );
}
