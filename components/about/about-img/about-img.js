import React from "react";
import Image from "next/image";
import styles from "./about-img.module.css";
import { useAppContext } from "@/contexts/AppContext";

const About_img = () => {
  const { dataLanguage } = useAppContext(); //llamar a img
  return (
    <div className={styles.container}>
      <Image src="/../../../favicon.ico" width={300} height={300} alt="me" />
      <p className={styles.name}>Maximiliano Coletti</p>
    </div>
  );
};

export default About_img;
