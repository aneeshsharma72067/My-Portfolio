import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../public/images/Logo.png";
import Image from "next/image";
import {
  DesignIcon,
  FacebookLogo,
  GithubLogo,
  HomeIcon,
  InstagramLogo,
  LinkedInLogo,
  MenuIcon,
  MessageIcon,
  UserIcon,
  WhatsappLogo,
} from "./Icons";

function CustomLink({ href, title, className = "" }) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${router.asPath === href ? "active__link" : ""} link`}
    >
      {title}
    </Link>
  );
}

function Navbar() {
  const [ShowNav, setShowNav] = useState(false);
  const toggleShow = () => {
    setShowNav(!ShowNav);
  };
  return (
    <div id="navbar">
      <nav className="desktopNav">
        <ul>
          <li>
            <CustomLink href={"/"} title="Home" className="link" />
          </li>
          <li>
            <CustomLink href={"/about"} title="About" className="link" />
          </li>
          <li>
            <CustomLink href={"/projects"} title="Designs" className="link" />
          </li>
          <li>
            <CustomLink href={"/Contact"} title="Contact" className="link" />
          </li>
        </ul>
      </nav>
      <nav className={`mobileNav ${ShowNav && "active__nav"}`}>
        <button className="menu__btn" onClick={toggleShow}>
          <MenuIcon />
        </button>
        <ul>
          <li>
            <CustomLink href={"/"} title="Home" className="link" />
            <HomeIcon />
          </li>
          <li>
            <CustomLink href={"/about"} title="About" className="link" />
            <UserIcon />
          </li>
          <li>
            <CustomLink href={"/projects"} title="Designs" className="link" />
            <DesignIcon />
          </li>
          <li>
            <CustomLink href={"/Contact"} title="Contact" className="link" />
            <MessageIcon />
          </li>
        </ul>
      </nav>

      <div id="logo">
        <div className="logoBgLine"></div>
        <Image alt="logo.png" src={Logo} />
      </div>
      <div className="social__media">
        <Link href={"https://www.instagram.com/aneesh72067/"} target="_blank">
          <InstagramLogo />
          <div className="hover__circle"></div>
        </Link>
        <Link href={"https://github.com/aneesh1024"} target="_blank">
          <GithubLogo />
          <div className="hover__circle"></div>
        </Link>
        <Link
          href={"https://www.facebook.com/aneesh.sharma.96742/"}
          target="_blank"
        >
          <FacebookLogo />
          <div className="hover__circle"></div>
        </Link>
        <Link
          href={"https://discordapp.com/users/1884"}
          target="_blank"
          className="linkedin__logo"
        >
          <LinkedInLogo />
          <div className="hover__circle"></div>
        </Link>
        <Link
          href={"https://api.whatsapp.com/send?phone=7206734591"}
          target="_blank"
        >
          <WhatsappLogo />
          <div className="hover__circle"></div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
