import Image from "next/image";
import React from "react";
import { easeInOut, motion, Variants } from "framer-motion";

function Skill({ image, skillLevel, skillName }) {
  return (
    <div className="skill">
      <div className="skill__image">
        <Image src={image} alt={`${skillName}.png`} />
      </div>
      <div className="skill__detail">
        <div className="upper">
          <div className="skill__name">{skillName}</div>
          <div className="skill__level">{skillLevel}%</div>
        </div>
        <div className="lower">
          <div className="full__bar">
            <motion.div
              variants={{
                nolength: {
                  width: 0,
                },
                fulllength: {
                  width: `${skillLevel}%`,
                },
              }}
              initial="nolength"
              whileInView="fulllength"
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              viewport={{ once: true, amount: 0.8 }}
              className="skill__bar"
              style={{ width: `${skillLevel}%` }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
