import React from "react";
import styles from "./aboutSkills.module.css";
import { useAppContext } from "@/contexts/AppContext";

const AboutSkills = () => {
  const { dataLanguage } = useAppContext();
  const skillsAndPoints = dataLanguage.about.skills.map((skill, index) => {
    let ellipses = [];
    for (let i = 0; i < 5; i++) {
      if (i < dataLanguage.about.skillPoints[index]) {
        ellipses.push(
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "white",
              border: "2px solid white",
              margin: "5px",
            }}
          ></div>
        );
      } else {
        ellipses.push(
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "2px solid white",
              margin: "5px",
            }}
          ></div>
        );
      }
    }
    return (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "40%",
          height: "5%",
        }}
      >
        <p style={{ width: "50%", margin: "0%" }}>{skill}</p>
        <div style={{ flexDirection: "row", display: "flex", width: "50%" }}>
          {ellipses}
        </div>
      </div>
    );
  });
  const languages = dataLanguage.about.languages.map((skill, index) => {
    let ellipses = [];
    for (let i = 0; i < 5; i++) {
      if (i < dataLanguage.about.languagesPoints[index]) {
        ellipses.push(
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "white",
              border: "2px solid white",
              margin: "5px",
            }}
          ></div>
        );
      } else {
        ellipses.push(
          <div
            key={i}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "2px solid white",
              margin: "5px",
            }}
          ></div>
        );
      }
    }
    return (
      <div
        key={index}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "40%",
          height: "5%",
        }}
      >
        <p style={{ width: "50%", margin: "0%" }}>{skill}</p>
        <div style={{ flexDirection: "row", display: "flex", width: "50%" }}>
          {ellipses}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.containerAbout}>
      <h2>{dataLanguage.about.titles.first}</h2>
      <p>{dataLanguage.about.description}</p>
      <h2>{dataLanguage.about.titles.second}</h2>
      <div className={styles.containerSkills}>{skillsAndPoints}</div>
      <h2>{dataLanguage.about.titles.third}</h2>
      <div className={styles.containerSkills}>{languages}</div>
    </div>
  );
};

export default AboutSkills;
