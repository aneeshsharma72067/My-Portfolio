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
          <Link href={`github.com`}>Github</Link>
          <Link href={`github.com`}>Instagram</Link>
          <Link href={`github.com`}>Discord</Link>
          <Link href={`github.com`}>Freelancer</Link>
          <Link href={`github.com`}>Fiverr</Link>
          <Link href={`github.com`}>Codepen</Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
