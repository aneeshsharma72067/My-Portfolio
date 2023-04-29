import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../public/Images/Logo.png";
import Image from "next/image";
import Instagram from "../public/Images/instagram.svg";
import Github from "../public/Images/github.svg";
import Facebook from "../public/Images/facebook.svg";
import Discord from "../public/Images/discord.svg";
import Whatsapp from "../public/Images/whatsapp.svg";

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
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li>
            <CustomLink href={"/"} title="Home" className="link" />
          </li>
          <li>
            <CustomLink href={"/about"} title="About" className="link" />
          </li>
          <li>
            <CustomLink href={"/projects"} title="Projects" className="link" />
          </li>
          <li>
            <CustomLink href={"/contact"} title="Contact" className="link" />
          </li>
        </ul>
      </nav>
      <div id="logo">
        <div className="logoBgLine"></div>
        <Image alt="logo.png" src={Logo} />
      </div>
      <div className="social__media">
        <Link href={"https://www.instagram.com/aneesh72067/"} target="_blank">
          <Image src={Instagram} alt="instagram.svg" />
        </Link>
        <Link href={"https://github.com/aneesh1024"} target="_blank">
          <Image src={Github} alt="github.svg" />
        </Link>
        <Link
          href={"https://www.facebook.com/aneesh.sharma.96742/"}
          target="_blank"
        >
          <Image src={Facebook} alt="facebook.svg" />
        </Link>
        <Link href={"https://discordapp.com/users/1884"} target="_blank">
          <Image src={Discord} alt="discord.svg" />
        </Link>
        <Link
          href={"https://api.whatsapp.com/send?phone=7206734591"}
          target="_blank"
        >
          <Image src={Whatsapp} alt="github.svg" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
