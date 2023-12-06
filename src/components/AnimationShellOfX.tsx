"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type AnimationShellOfXProps = {
  children: React.ReactNode;
  delay: number;
  duration: number;
  x: string | number;
};

export default function AnimationShellOfX({
  children,
  delay = 0.25,
  duration = 0.5,
  x = "100%",
}: AnimationShellOfXProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const sideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      sideControl.start("visible");
    }
  }, [isInView, sideControl]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={sideControl}
      transition={{ duration, delay }}
      //   className="absolute top-2 bottom-2 left-0 right-0 bg-black z-20"
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
