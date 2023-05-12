import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { animate, motion } from "framer-motion";
import { useRouter } from "next/router";
import { CircularText } from "./Icons";

function FixedLinks() {
  return (
    <div>
      <div className="mail__link">
        <div className="line"></div>
        <Link href="mailto:aneeshsharma1024@gmail.com">
          aneeshsharma1024@gmail.com
        </Link>
      </div>

      <Link
        href={"/Contact"}
        className="hire__me"
        style={{
          opacity: `${useRouter().asPath === "/Contact" ? 0 : 1}`,
          pointerEvents: `${
            useRouter().asPath === "/Contact" ? "none" : "auto"
          }`,
        }}
      >
        Hire Me
        <div className="circle">
          <CircularText />
        </div>
      </Link>
    </div>
  );
}

export default FixedLinks;
