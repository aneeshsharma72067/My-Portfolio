import Transition from "@/components/Transition";
import Link from "next/link";
import Image from "next/image";
import InsightImage from "../public/Images/Insight.png";
import PurplePortfolio from "../public/Images/Portfolio-purple.png";
import YellowPortfolio from "../public/Images/Portfolio-yellow.png";
import BeatsImage from "../public/Images/Beats.png";
import Ecommerce from "../public/Images/E-commerce.png";
import TravelImage from "../public/Images/Travel.png";
import HTMLLogo from "../public/Images/HTML.png";
import CSSLogo from "../public/Images/CSS.png";
import JSLogo from "../public/Images/JS.png";
import PythonLogo from "../public/Images/Python.png";
import CppLogo from "../public/Images/C++.png";
import TSLogo from "../public/Images/TS.png";
import ReactLogo from "../public/Images/React.png";
import NextJSLogo from "../public/Images/NextJS.png";
import BootstrapLogo from "../public/Images/Bootstrap.png";
import TailwindLogo from "../public/Images/Tailwind.png";
import MongoDBLogo from "../public/Images/MongoDB.png";
import { useRef, useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  const itemRef = useRef();
  // console.log(itemRef.current.childElementCount);
  useEffect(() => {
    function parallax(e) {
      // console.log(e.pageX, e.pageY)
      const item = itemRef?.current?.childNodes;
      item?.forEach((el) => {
        const speed = el.getAttribute("data-speed");
        const x = (0.5 * window.innerWidth - e.pageX * speed) / 70;
        const y = (0.5 * window.innerHeight - e.pageY * speed) / 70;
        el.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }
    window.addEventListener("mousemove", parallax);
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
            <div>There</div>
          </div>
          <div className="second__head head">
            <div>I am&nbsp;</div>
            <div>Aneesh</div>
          </div>
          <div className="third__head head">
            <div>I am a&nbsp;</div>
            <div>Web Developer</div>
          </div>
          <div className="para">
            I am a young man on the path of Software Developer. I desing and
            build Websites.
          </div>
          <div className="btn__section">
            <motion.button whileHover={{ scale: "1.2" }}>
              <a
                href="/Aneesh-Sharma.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="resume__logo">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 14.1a.6.6 0 0 1 .6.6v3a1.2 1.2 0 0 0 1.2 1.2h14.4a1.2 1.2 0 0 0 1.2-1.2v-3a.6.6 0 1 1 1.2 0v3a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4v-3a.6.6 0 0 1 .6-.6Z"></path>
                    <path d="M11.576 16.445a.6.6 0 0 0 .85 0l3.6-3.6a.6.6 0 1 0-.85-.85L12.6 14.572V4.02a.6.6 0 1 0-1.2 0v10.552l-2.576-2.577a.6.6 0 1 0-.85.85l3.6 3.6Z"></path>
                  </svg>
                </div>
                <span>My Resume</span>
              </a>
            </motion.button>
            <motion.button whileHover={{ scale: "1.2" }}>
              <Link href={"/contact"}>Lets Talk</Link>
            </motion.button>
          </div>
        </div>
        <div ref={itemRef} className="right">
          <Image
            alt="decor-image.png"
            src={HTMLLogo}
            data-speed="-2"
            className="layer html"
          />
          <Image
            alt="decor-image.png"
            src={CSSLogo}
            data-speed="-2"
            className="css"
          />
          <Image
            alt="decor-image.png"
            src={JSLogo}
            data-speed="-2"
            className="js"
          />
          <Image
            alt="decor-image.png"
            src={ReactLogo}
            data-speed="-2"
            className="react"
          />
          <Image
            alt="decor-image.png"
            src={NextJSLogo}
            data-speed="-2"
            className="nextjs"
          />
          <Image
            alt="decor-image.png"
            src={BootstrapLogo}
            data-speed="-2"
            className="bootstrap"
          />
          <Image
            alt="decor-image.png"
            src={TailwindLogo}
            data-speed="-2"
            className="tailwind"
          />
          <Image
            alt="decor-image.png"
            src={MongoDBLogo}
            data-speed="-2"
            className="mongodb"
          />
          <Image
            alt="decor-image.png"
            src={PythonLogo}
            data-speed="-2"
            className="python"
          />
          <Image
            alt="decor-image.png"
            src={CppLogo}
            data-speed="-2"
            className="cpp"
          />
          <Image
            alt="decor-image.png"
            src={TSLogo}
            data-speed="-2"
            className="ts"
          />
          <Image
            alt="decor-image.png"
            src={Ecommerce}
            data-speed="-3"
            className="layer ecommerce border-1 border-radius-10"
          />
          <Image
            alt="decor-image.png"
            src={PurplePortfolio}
            data-speed="-3"
            className="layer portPurple border-1 border-radius-10"
          />
          <Image
            alt="decor-image.png"
            src={YellowPortfolio}
            data-speed="-3"
            className="layer portYellow border-1 border-radius-10"
          />
          <Image
            alt="decor-image.png"
            src={BeatsImage}
            data-speed="-3"
            className="layer beats border-1 border-radius-10"
          />
          <Image
            alt="decor-image.png"
            src={TravelImage}
            data-speed="-5"
            className="layer travel border-1"
          />
          <Image
            alt="decor-image.png"
            src={InsightImage}
            data-speed="-5"
            className="layer insight border-1"
          />
        </div>
      </main>
    </div>
  );
}
