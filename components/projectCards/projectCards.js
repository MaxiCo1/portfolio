// projectCards.js
import React from "react";
import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import styles from "./projectCard.module.css";
import { useRouter } from "next/router";

const ProjectCards = () => {
  const { dataLanguage } = useAppContext();
  const router = useRouter();

  return (
    <div className={styles.container}>
      {dataLanguage.projects.map((project) => (
        <div
          key={project.id}
          className={styles.card}
          onClick={() => {
            router.push(`/project/${project.id}`);
          }}
        >
          <Image
            src={project.image}
            width={200}
            height={200}
            alt="project"
            className={
              project.title == "Buensai" ? styles.imageBackground : styles.image
            }
          />
          <h2>{project.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
