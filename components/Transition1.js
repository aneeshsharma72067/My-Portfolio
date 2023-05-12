import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { useRouter } from "next/router";
import styles from "../styles/Loader.module.css";

const variants = {
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.35,
    },
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0.5,
    },
  },
};
const Transition = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
