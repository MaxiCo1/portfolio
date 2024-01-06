"use client";
import React from "react";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Project.module.css";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import { useState } from "react";

const IndividualProject = () => {
  const { dataLanguage } = useAppContext();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const id = params.id;
  const project = null;

  if (id == null) {
    setLoading(false);
  } else if (id != null) {
    setLoading(true);
    project = dataLanguage.projects.find((project) => project.id === id);
  }

  return (
    <main>
      <Navbar />
      {!loading && (
        <section className={styles.container}>
          <Image
            alt={project.id}
            src={project.image}
            width={300}
            height={300}
            className={
              project.title == "Buensai" ? styles.imageBackground : styles.image
            }
          />
          <div className={styles.innerContainer}>
            <h1 className={styles.title}>{project.title}</h1>
            <p>{project.description}</p>
            <h2>{project.title2}</h2>
            <p>{project.technologies}</p>
            <div className={styles.btnContainer}>
              {project.buttons.map((btn, index) => (
                <a key={index} className={styles.btns} href={btn.url}>
                  <Image src={btn.logo} width={25} height={25} alt="img" />
                  {btn.text}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
      {loading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </main>
  );
};

export default IndividualProject;
