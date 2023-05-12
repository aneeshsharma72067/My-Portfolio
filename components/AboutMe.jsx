import React from 'react'
import ProfilePic from "../public/images/profile.webp";
import Image from "next/image";

function AboutMe() {
  return (
    <main>
        <div className="main__head">
          I&apos;m <span id="name">Aneesh</span>
        </div>
        <div className="about__content">
          <div className="about__image">
            <Image src={ProfilePic} priority={true} id="profilePic" alt="aneesh_sharma.png" />
          </div>
          <div className="about__text">
            <div className="about_text_head">
              I am a second year
              <span className="primary-text">Computer Science</span> Engineering
              student in <span id="country">India</span>. Currently, I work as a
              freelance web developer and designer along with my studies as a
              B.tech Undergraduate.
            </div>
            <div className="about_text_para">
              Due to my upbringing in an Indian household, punctuality and hard
              work were instilled in my soul from an early age. After choosing
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
  )
}

export default AboutMe