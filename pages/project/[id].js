import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/Project.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";

const IndividualProject = () => {
  const { dataLanguage } = useAppContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id;
      const project = dataLanguage.projects.find(
        (project) => project.id === id
      );
      setProject(project);
      setLoading(false);
    }
  }, [router.isReady, router.query.id, dataLanguage]);

  return (
    <main>
      <Navbar />
      {!loading && project && (
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
      {loading && <div>ERROR</div>}
    </main>
  );
};

export default IndividualProject;
