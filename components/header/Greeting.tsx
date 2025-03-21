import { animate, motion, useMotionValue, useTransform } from "motion/react";
import CursorBlinker from "./CursorBlinker";
import { useEffect } from "react";

const Greeting = () => {
  const baseText = "Hi! I am Abhishek P V";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest),
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 2.5,
      delay: 0.5,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <div className="min-h-16">
      <motion.h3 className="inline-block text-xl md:text-2xl mb-3 font-Ovo mr-1 mt-1">
        {displayText}
      </motion.h3>
      <CursorBlinker />
    </div>
  );
};

export default Greeting;
