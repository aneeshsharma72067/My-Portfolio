import Transition from "@/components/Transition";
import Head from "next/head";
import React, { useRef } from "react";
import Sunset from "../public/images/sunset.jpg";
import MessageLogo from "../public/images/message.png";
import { easeInOut, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

function Contact() {
  const formMessage = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const msgRef = useRef();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (nameRef.current.value < 2) {
      alert("Pleae enter a proper name !!");
    } else if (emailRef.current.value < 5) {
      alert("Please enter a proper email !!");
    } else if (msgRef.current.value < 1) {
      alert("Please Enter a message !!");
    } else {
      emailjs
        .sendForm(
          "service_75b8cf5",
          "template_codi6zk",
          form.current,
          "8w2s-WGbDs1njXNwI"
        )
        .then(
          (result) => {
            console.log("Email Sent Succesfully");
          },
          (err) => {
            console.log(err.text);
          }
        );
      formMessage.current.classList.add("show");
      setTimeout(() => {
        formMessage.current.classList.remove("show");
      }, 2000);
    }
  };

  return (
    <div id="contact">
      <Head>
        <title>Aneesh • Contact</title>
      </Head>
      <Transition />
      <main>
        <div className="contact__head">Get In Touch</div>
        <div className="contact__number">
          <div>Give me a call</div>
          <span>
            <svg
              width="40"
              height="40"
              fill="#db5447"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.356 2.639a2.181 2.181 0 0 1 3.262.203l2.244 2.883a2.18 2.18 0 0 1 .394 1.867l-.684 2.738a.848.848 0 0 0 .223.804l3.07 3.07a.847.847 0 0 0 .806.223l2.736-.683a2.181 2.181 0 0 1 1.868.393l2.882 2.243a2.18 2.18 0 0 1 .204 3.264l-1.293 1.292c-.925.925-2.307 1.331-3.596.878a23.293 23.293 0 0 1-8.762-5.525 23.292 23.292 0 0 1-5.525-8.762c-.453-1.287-.047-2.67.878-3.596L4.356 2.64Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <Link href={"tel:+917206734591"}>+91 72067 34591</Link>
        </div>
        <Image src={Sunset} className="contact__img" />
        <section className="send__message">
          <motion.div
            initial={{ x: "-50%", opacity: 0 }}
            whileInView={{ x: "0", opacity: 1 }}
            transition={{ duration: 0.2, ease: easeInOut }}
            viewport={{ once: true }}
            className="send_msg_left"
          >
            <div className="msg__circle"></div>
            <Image
              src={MessageLogo}
              alt="message.png"
              className="message__logo"
            />
            <div className="send_msg_head">Send Me a Message</div>
            <div className="send_msg_text">
              Just send me a message and we can discuss the details regarding
              your work. If you just want to say hello, you can text me on my
              social media and we can talk about any stuff you like 😁.
            </div>
          </motion.div>
          <div className="send_msg_right">
            <form ref={form} onSubmit={sendEmail}>
              <motion.div
                initial={{ x: "50%", opacity: 0 }}
                whileInView={{ x: "0", opacity: 1 }}
                transition={{ duration: 0.1, ease: easeInOut }}
                viewport={{ once: true }}
                className="username input__box"
                style={{ transition: "0" }}
              >
                <input
                  type="text"
                  name="user_name"
                  id="username"
                  ref={nameRef}
                />
                <label htmlFor="name">Enter your Name</label>
              </motion.div>
              <motion.div
                initial={{ x: "50%", opacity: 0 }}
                whileInView={{ x: "0", opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1, ease: easeInOut }}
                viewport={{ once: true }}
                style={{ transition: "0" }}
                className="email input__box"
              >
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  ref={emailRef}
                />
                <label htmlFor="email">Enter your Email</label>
              </motion.div>
              <motion.div
                style={{ transition: "0" }}
                initial={{ x: "50%", opacity: 0 }}
                whileInView={{ x: "0", opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2, ease: easeInOut }}
                viewport={{ once: true }}
                className="message input__box"
              >
                <textarea name="message" id="message" ref={msgRef}></textarea>
                <label htmlFor="message">Enter Your Message</label>
              </motion.div>
              <div className="submit__message" ref={formMessage}>
                The Message was sent succesfully ✅
              </div>
              <div className="buttons">
                <motion.input
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ duration: 0.1, ease: easeInOut }}
                  viewport={{ once: true }}
                  type="submit"
                  className="form__btn"
                  value="Send Message"
                />
                <motion.input
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: "0", opacity: 1 }}
                  transition={{ duration: 0.1, ease: easeInOut }}
                  viewport={{ once: true }}
                  type="reset"
                  className="form__btn"
                  value="Clear"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
