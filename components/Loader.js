import React from "react";
import styles from "../styles/Loader.module.css";
import { easeInOut, motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: easeInOut }}
    >
      <div className={styles.loading_bg}></div>
      <div id={styles.loading}>
        <div class={styles.wrapper}>
          <div class={styles.dot}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
