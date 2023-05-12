import Transition from "@/components/Transition";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import InsightImage from "../public/images/Insight.webp";
import PurplePortfolio from "../public/images/Portfolio-purple.webp";
import BeatsImage from "../public/images/Beats.jpg";
import Ecommerce from "../public/images/E-commerce.webp";
import TravelImage from "../public/images/Travel.webp";
import PortfolioJoseph from "../public/images/Portfolio-Joseph.webp";
import Footer from "@/components/Footer";
import { easeInOut, motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects">
      <Head>
        <title>Aneesh • Designs</title>
      </Head>
      <Transition />
      <main>
        <div className="line"></div>
        <div className="projects__head">
          Some of my <span className="primary-text"> Designs</span>
        </div>
        <section className="projects__section">
          <div className="project__row">
            <div className="project__line" style={{ width: "40%" }}></div>
            <div className="project" style={{ marginLeft: "25rem" }}>
              <div>Insight Dashboard</div>
              <div className="project__image">
                <div className="gradient__black"></div>
                <Image src={InsightImage} alt="insight.png" />
              </div>
            </div>
          </div>
          <div className="project__row">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="project__line"
              style={{ width: "40%" }}
            ></motion.div>
            <div className="project" style={{ marginLeft: "15rem" }}>
              <div>Portfolio</div>
              <div
                className="project__image"
                style={{
                  width: "max-content",
                  height: "100%",
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "0%" }}
                  className="gradient__black"
                  transition={{ duration: 0.3, delay: 0.3, ease: easeInOut }}
                  viewport={{ once: true, amount: 0.8 }}
                  style={{ background: "var(--primary-color)" }}
                ></motion.div>
                <div
                  className="gradient__black"
                  style={{ width: "100%", height: "100%" }}
                ></div>
                <Image
                  src={PortfolioJoseph}
                  alt="insight.png"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="project__row">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="project__line"
              style={{ width: "40%" }}
            ></motion.div>
            <div className="project" style={{ marginLeft: "23rem" }}>
              <div>Ecommerce</div>
              <div
                className="project__image"
                style={{
                  width: "max-content",
                  height: "100%",
                  marginLeft: "1px",
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "0%" }}
                  className="gradient__black"
                  transition={{ duration: 0.3, delay: 0.3, ease: easeInOut }}
                  viewport={{ once: true, amount: 0.8 }}
                  style={{ background: "var(--primary-color)" }}
                ></motion.div>
                <div className="gradient__black"></div>
                <Image
                  src={Ecommerce}
                  alt="insight.png"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="project__row">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "45%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="project__line"
              style={{ width: "45%" }}
            ></motion.div>
            <div className="project" style={{ marginLeft: "30rem" }}>
              <div>Beats Ecommerce</div>
              <div
                className="project__image"
                style={{
                  width: "max-content",
                  height: "max-content",
                  marginLeft: "1px",
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "0%" }}
                  className="gradient__black"
                  transition={{ duration: 0.3, delay: 0.3, ease: easeInOut }}
                  viewport={{ once: true, amount: 0.8 }}
                  style={{ background: "var(--primary-color)" }}
                ></motion.div>
                <div className="gradient__black"></div>
                <Image
                  src={BeatsImage}
                  alt="insight.png"
                  style={{ width: "20rem", height: "8rem" }}
                />
              </div>
            </div>
          </div>
          <div className="project__row">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="project__line"
            ></motion.div>
            <div className="project" style={{ marginLeft: "20rem" }}>
              <div>Travel Website</div>
              <div
                className="project__image"
                style={{
                  width: "max-content",
                  height: "max-content",
                  marginLeft: "1px",
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "0%" }}
                  className="gradient__black"
                  transition={{ duration: 0.3, delay: 0.3, ease: easeInOut }}
                  viewport={{ once: true, amount: 0.8 }}
                  style={{ background: "var(--primary-color)" }}
                ></motion.div>
                <div className="gradient__black"></div>
                <Image
                  src={TravelImage}
                  alt="insight.png"
                  style={{ width: "20rem", height: "8rem" }}
                />
              </div>
            </div>
          </div>
          <div className="project__row">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "40%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="project__line"
            ></motion.div>
            <div className="project" style={{ marginLeft: "20rem" }}>
              <div>Portfolio</div>
              <div
                className="project__image"
                style={{
                  width: "max-content",
                  height: "max-content",
                  marginLeft: "2rem",
                }}
              >
                <motion.div
                  initial={{ width: "100%" }}
                  whileInView={{ width: "0%" }}
                  className="gradient__black"
                  transition={{ duration: 0.3, delay: 0.3, ease: easeInOut }}
                  viewport={{ once: true, amount: 0.8 }}
                  style={{ background: "var(--primary-color)" }}
                ></motion.div>
                <div className="gradient__black"></div>
                <Image src={PurplePortfolio} alt="insight.png" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;
