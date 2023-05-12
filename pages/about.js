import Transition from "@/components/Transition";
import Image from "next/image";
import DesignIcon from "../public/images/icon-design.png";
import Head from "next/head";
import Skill from "@/components/Skill";
import HTMLCSS from "../public/images/html-css.png";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import JS from "../public/images/javascript.svg";
import ReactJS from "../public/images/react-native.svg";
import NextJS from "../public/images/nextjs.svg";
import NodeJS from "../public/images/nodejs.svg";
import Tailwind from "../public/images/tailwindcss.svg";
import Bootstrap from "../public/images/bootstrap.svg";
import MongoDB from "../public/images/mongodb.svg";
import Figma from "../public/images/figma.svg";
import { CompetitiveLogo, FrontEndLogo } from "@/components/Icons";
import dynamic from "next/dynamic";

const AboutMe = dynamic(() => import("../components/AboutMe"));

const skillIconVariants = {
  inviewport: {
    scale: 1,
  },
  notinviewport: {
    scale: 0,
  },
};

function About() {
  return (
    <div id="about">
      <Head>
        <title>Aneesh • About</title>
      </Head>
      <Transition />
      <AboutMe />
      <section id="passion">
        <div className="passion__head">
          PASS<span className="primary-text">ION</span>
        </div>
        <div className="passion__list">
          <div className="line"></div>
          <div className="passion__item">
            <motion.div
              variants={skillIconVariants}
              initial="notinviewport"
              whileInView="inviewport"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              viewport={{ once: true, amount: 0.8 }}
              className="passion_item_icon"
            >
              <FrontEndLogo />
            </motion.div>
            <div className="passion_item_head">Front End Development</div>
            <div className="passion_item_text">
              Ever since I started web development, my utmost priority was to
              make the site unique and beautiful but at the same time I also
              focused on a simple user interface. Either it is a simple HTML,
              CSS and JS webpage or a Next.js Webapp, I make the design
              responsive so that people allover the globe could access it, even
              with their smartphones . If you need as amazing webpage/website
              with good UI then I am the guy for you !
            </div>
          </div>
          <div className="passion__item">
            <motion.div
              variants={skillIconVariants}
              initial="notinviewport"
              whileInView="inviewport"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="passion_item_icon"
            >
              <Image src={DesignIcon} alt="design_icon.png" />
            </motion.div>
            <div className="passion_item_head">Web Design</div>
            <div className="passion_item_text">
              Along with good functionality and responsiveness, a website also
              needs a good design. I create designs for websites using FIGMA and
              SKETCH. I also convert designs from FIGMA to actual website using
              any technology mentioned. If you want me make both the design and
              the website, then consider the job done.
            </div>
          </div>
          <div className="passion__item">
            <motion.div
              variants={skillIconVariants}
              initial="notinviewport"
              whileInView="inviewport"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.8 }}
              className="passion_item_icon"
            >
              <CompetitiveLogo />
            </motion.div>
            <div className="passion_item_head">Comptetitive Programming</div>
            <div className="passion_item_text">
              Along with designing and developing websites, I also like to
              participate in competitive programming on platforms like Leetcode,
              GeeksforGeeks, Codechef etc. Competitive Programming is a really
              good practice for problem solving and logic building. It is also a
              way to earn great rewards 😉
            </div>
          </div>
        </div>
      </section>
      <section id="skillset">
        <div className="skillset__head">
          <span className="primary-text">SKILL</span> SET
        </div>
        <div className="skills">
          <Skill image={HTMLCSS} skillLevel={90} skillName={"HTML/CSS"} />
          <Skill image={JS} skillLevel={85} skillName={"JS"} />
          <Skill image={ReactJS} skillLevel={90} skillName={"React.js"} />
          <Skill image={NextJS} skillLevel={80} skillName={"Next.js"} />
          <Skill image={NodeJS} skillLevel={95} skillName={"Node.js"} />
          <Skill image={Tailwind} skillLevel={95} skillName={"Tailwind CSS"} />
          <Skill image={Bootstrap} skillLevel={75} skillName={"Bootstrap"} />
          <Skill image={MongoDB} skillLevel={80} skillName={"MongoDB"} />
          <Skill image={Figma} skillLevel={85} skillName={"Figma"} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
