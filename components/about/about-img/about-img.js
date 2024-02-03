import React from "react";
import Image from "next/image";
import styles from "./about-img.module.css";
import { useAppContext } from "@/contexts/AppContext";

const About_img = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/../../../profile-pic.jpg"
          width={300}
          height={400}
          alt="me"
        />
      </div>
      <p className={styles.name}>Maximiliano Coletti</p>
    </div>
  );
};

export default About_img;
