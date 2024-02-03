import React from "react";
import AboutImg from "@/components/about/about-img/about-img";
import AboutSkills from "@/components/about/about-skills/aboutSkills";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/About.module.css";
import { useAppContext } from "@/contexts/AppContext";

const aboutme = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { dataLanguage } = useAppContext();
  return (
    <main>
      <Navbar />
      <section className={styles.about}>
        <AboutImg />
        <AboutSkills />
      </section>

      <a href={dataLanguage.cv.file} download className={styles.aboutCv}>
        {dataLanguage.cv.text}
      </a>
    </main>
  );
};

export default aboutme;
