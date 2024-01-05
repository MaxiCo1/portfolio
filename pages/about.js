import React from "react";
import AboutImg from "@/components/about/about-img/about-img";
import AboutSkills from "@/components/about/about-skills/aboutSkills";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/About.module.css";

const aboutme = () => {
  return (
    <main>
      <Navbar />
      <section className={styles.about}>
        <AboutImg />
        <AboutSkills />
      </section>
    </main>
  );
};

export default aboutme;
