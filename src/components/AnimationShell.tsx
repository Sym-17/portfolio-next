"use client";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimationShell({ children }: PropsWithChildren) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 1, delay: 0.5 }}
      ref={ref}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
