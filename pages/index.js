import Transition from "@/components/Transition";
import Link from "next/link";
import Image from "next/image";
import InsightImage from "../public/images/Insight.webp";
import PurplePortfolio from "../public/images/Portfolio-purple.webp";
import YellowPortfolio from "../public/images/Portfolio-yellow.png";
import BeatsImage from "../public/images/Beats.jpg";
import Ecommerce from "../public/images/E-commerce.webp";
import TravelImage from "../public/images/Travel.webp";
import HTMLLogo from "../public/images/HTML.png";
import CSSLogo from "../public/images/CSS.png";
import JSLogo from "../public/images/JS.png";
import PythonLogo from "../public/images/Python.png";
import CppLogo from "../public/images/C++.png";
import TSLogo from "../public/images/TS.png";
import ReactLogo from "../public/images/React.png";
import NextJSLogo from "../public/images/NextJS.png";
import BootstrapLogo from "../public/images/Bootstrap.png";
import TailwindLogo from "../public/images/Tailwind.png";
import MongoDBLogo from "../public/images/MongoDB.png";
import { useRef, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { DownloadIcon } from "@/components/Icons";

export default function Home() {
  const itemRef = useRef();
  function parallax(e) {
    const item = itemRef?.current?.childNodes;
    item?.forEach((el) => {
      const speed = el.getAttribute("data-speed");
      const x = (0.5 * window.innerWidth - e.pageX * speed) / 70;
      const y = (0.5 * window.innerHeight - e.pageY * speed) / 70;
      el.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  useEffect(() => {
    if (!window.matchMedia("(max-width: 480px)").matches) {
      window.addEventListener("mousemove", parallax);
    }
  }, []);

  return (
    <div id="home">
      <style>
        {`
          body{
            overflow:hidden;
          }
          `}
      </style>
      <Transition />
      <main>
        <Head>
          <title>Aneesh • Home</title>
        </Head>
        <div className="left">
          <div className="first__head head">
            <div>Hi&nbsp;</div>
            <div>There !</div>
          </div>
          <div className="second__head head">
            <div>I am&nbsp;</div>
            <div>Aneesh</div>
          </div>
          <div className="third__head head">
            <div>I am ,&nbsp;</div>
            <div>A Web Developer</div>
          </div>
          <div className="para">
            I am a young man on the path of Software Developer. I desing and
            build Websites.
          </div>
          <div className="btn__section">
            <motion.button whileHover={{ scale: "1.2" }}>
              <a
                href="/Aneesh_Sharma.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="resume__logo">
                  <DownloadIcon />
                </div>
                <span>My Resume</span>
              </a>
            </motion.button>
            <motion.button whileHover={{ scale: "1.2" }}>
              <Link href={"/Contact"}>Lets Talk</Link>
            </motion.button>
          </div>
        </div>
        <div ref={itemRef} className="right">
          <Image
            priority={true}
            alt="decor-image.png"
            src={HTMLLogo}
            data-speed="-2"
            className="layer html"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={CSSLogo}
            data-speed="-2"
            className="css"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={JSLogo}
            data-speed="-2"
            className="js"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={ReactLogo}
            data-speed="-2"
            className="react"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={NextJSLogo}
            data-speed="-2"
            className="nextjs"
          />
          <Image
            alt="decor-image.png"
            priority={true}
            src={BootstrapLogo}
            data-speed="-2"
            className="bootstrap"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={TailwindLogo}
            data-speed="-2"
            className="tailwind"
          />
          <Image
            alt="decor-image.png"
            priority={true}
            src={MongoDBLogo}
            data-speed="-2"
            className="mongodb"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={PythonLogo}
            data-speed="-2"
            className="python"
          />
          <Image
            alt="decor-image.png"
            priority={true}
            src={CppLogo}
            data-speed="-2"
            className="cpp"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={TSLogo}
            data-speed="-2"
            className="ts"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={Ecommerce}
            data-speed="-3"
            className="layer ecommerce border-1 border-radius-10"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={PurplePortfolio}
            data-speed="-3"
            className="layer portPurple border-1 border-radius-10"
          />
          <Image
            priority={true}
            alt="decor-image.png"
            src={YellowPortfolio}
            data-speed="-3"
            className="layer portYellow border-1 border-radius-10"
          />
          <Image
            alt="decor-image.png"
            priority={true}
            src={BeatsImage}
            data-speed="-3"
            className="layer beats border-1 border-radius-10"
          />
          <Image
            alt="decor-image.png"
            priority={true}
            src={TravelImage}
            data-speed="-5"
            className="layer travel border-1"
          />
          <Image
            alt="decor-image.png"
            priority={true}
            src={InsightImage}
            data-speed="-5"
            className="layer insight border-1"
          />
        </div>
      </main>
    </div>
  );
}
