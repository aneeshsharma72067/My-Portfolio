import React from "react";
import { easeInOut, motion } from "framer-motion";

function Transition() {
  return (
    <>
      {false && (
        <div>
          <motion.div
            className="transition1"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0", width: "0" }}
            exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
            transition={{ duration: 0.4, ease: easeInOut }}
          />
          <motion.div
            className="transition2"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0", width: "0" }}
            transition={{ delay: 0.1, duration: 0.4, ease: easeInOut }}
          />
          <motion.div
            className="transition3"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0", width: "0" }}
            transition={{ delay: 0.2, duration: 0.4, ease: easeInOut }}
          />
        </div>
      )}
    </>
  );
}

export default Transition;
