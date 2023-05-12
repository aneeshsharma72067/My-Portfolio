import React from "react";
import { motion, easeInOut } from "framer-motion";
import Link from "next/link";

function Footer() {
  return (
    <div id="about__footer">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: easeInOut,
        }}
        viewport={{ once: true, amount: 0.8 }}
        className="copyright"
      >
        &copy; 2023 Aneesh Sharma . All rights reserved
      </motion.div>
      <div className="about_footer_links">
        <div className="links__head">Elsewhere</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: easeInOut,
          }}
          viewport={{ once: true, amount: 0.8 }}
          className="links"
        >
          <Link href={`https://github.com/aneeshsharma72067`}>Github</Link>
          <Link href={`https://www.instagram.com/aneesh72067/`}>Instagram</Link>
          <Link href={`https://www.upwork.com/freelancers/~01e2321a0401cf97bb`}>
            Upwork
          </Link>
          <Link href={`https://www.freelancer.com/u/aneesh1024`}>
            Freelancer
          </Link>
          <Link href={` https://www.fiverr.com/aneeshsharma007`}>Fiverr</Link>
          <Link href={`https://codepen.io/aneesh1024`}>Codepen</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
