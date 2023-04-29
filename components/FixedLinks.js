import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { animate, motion } from "framer-motion";
import CircleType from "circletype";
import { useRouter } from "next/router";

function FixedLinks() {
  const circleRef = useRef();
  useEffect(() => {
    new CircleType(circleRef.current);
  }, []);
  return (
    <div>
      <div className="mail__link">
        <div className="line"></div>
        <Link href="mailto:aneeshsharma1024@gmail.com">
          aneeshsharma1024@gmail.com
        </Link>
      </div>

      <Link
        href={"/contact"}
        className="hire__me"
        style={{
          // display: `${useRouter().asPath === "/contact" ? "none" : "flex"}`,
          opacity: `${useRouter().asPath === "/contact" ? 0 : 1}`,
          pointerEvents: `${
            useRouter().asPath === "/contact" ? "none" : "auto"
          }`,
        }}
      >
        Hire Me
        <div ref={circleRef} className="circle">
          Web Developer, Web Designer, UI/UX Developer,
        </div>
      </Link>
    </div>
  );
}

export default FixedLinks;
