import Transition from "@/components/Transition";
import Image from "next/image";
import ProfilePic from "../public/Images/profile.jpg";
import DesignIcon from "../public/Images/icon-design.png";
import Head from "next/head";
import Skill from "@/components/Skill";
import HTMLCSS from "../public/Images/html-css.png";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import JS from "../public/Images/javascript.svg";
import ReactJS from "../public/Images/react-native.svg";
import NextJS from "../public/Images/nextjs.svg";
import NodeJS from "../public/Images/nodejs.svg";
import Tailwind from "../public/Images/tailwindcss.svg";
import Bootstrap from "../public/Images/bootstrap.svg";
import MongoDB from "../public/Images/mongodb.svg";
import Figma from "../public/Images/figma.svg";

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
      <main>
        <div className="main__head">
          I'm <span id="name">Aneesh</span>
        </div>
        <div className="about__content">
          <div className="about__image">
            <Image src={ProfilePic} id="profilePic" alt="aneesh_sharma.png" />
          </div>
          <div className="about__text">
            <div className="about_text_head">
              I am a second year{" "}
              <span className="primary-text">Computer Science</span> Engineering
              student in <span id="country">India</span>. I work as a freelance
              web developer, designer and I'm also a competetive programmer
            </div>
            <div className="about_text_para">
              Due to my upbringing in an Indian household, punctuality and hard
              work were instilled in my soul from the age of 6. After choosing
              Computer Science in college, my interest in Development of Web and
              Mobile Applications has increased exponentially. Combining that
              interest with hard work, I gained really good experience with Web
              Technologies. I try to learn as much as I can about Web
              Development. I am also interested in Designing, so If you want
              some authentic and unique designs, feel free to ask me. My
              personal hobbies are gaming and reading manga. If you are also an
              manga reader like me then we could really have a good chat
              together :)
            </div>
          </div>
        </div>
      </main>
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
              <svg
                width="60"
                height="60"
                fill="#db5447"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.25 1.5H3.75a3.003 3.003 0 0 0-3 3v15a3.003 3.003 0 0 0 3 3h16.5a3.004 3.004 0 0 0 3-3v-15a3.003 3.003 0 0 0-3-3ZM4.5 12a.75.75 0 0 1-.469-1.335L7.05 8.25 4.03 5.835a.75.75 0 0 1 .938-1.171l3.75 3a.75.75 0 0 1 0 1.171l-3.75 3A.75.75 0 0 1 4.5 12Zm7.5 0H9a.75.75 0 1 1 0-1.5h3a.75.75 0 1 1 0 1.5Z"></path>
              </svg>
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
              <svg
                width="60"
                height="60"
                fill="#db5447"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 18.234a.98.98 0 0 1-.648-.244l-6-5.25a.985.985 0 0 1 0-1.48l6-5.25a.984.984 0 1 1 1.296 1.48L2.994 12l5.154 4.509a.984.984 0 0 1-.649 1.725Z"></path>
                <path d="M16.5 18.234a.984.984 0 0 1-.648-1.725l5.154-4.51-5.153-4.508a.984.984 0 1 1 1.296-1.482l6 5.25a.985.985 0 0 1 0 1.482l-6 5.25a.979.979 0 0 1-.648.243Z"></path>
                <path d="M9.75 20.481a.985.985 0 0 1-.943-1.266l4.5-15a.984.984 0 1 1 1.885.563l-4.5 15a.984.984 0 0 1-.942.703Z"></path>
              </svg>
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
