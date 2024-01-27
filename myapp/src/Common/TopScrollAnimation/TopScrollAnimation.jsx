import { motion, useScroll } from "framer-motion";
import "./TopScrollAnimation.css";

export default function TopScrollAnimation() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
