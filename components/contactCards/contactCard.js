import React from "react";
import styles from "./contactCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";

const ContactCard = () => {
  const { dataLanguage } = useAppContext();
  return (
    <section className={styles.container}>
      <article>
        <div>
          <Image src="/email.png" width={100} height={100} alt="mail" />
        </div>
        <h2>Gmail</h2>
        <Link href="mailto:coletti.maxi@gmail.com">coletti.maxi@gmail.com</Link>
      </article>
      <article>
        <div>
          <Image src="/phone.png" width={100} height={100} alt="mail" />
        </div>
        <h2>{dataLanguage.contact}</h2>
        <p>+54 011 3888-2644</p>
      </article>
      <article>
        <div>
          <Image src="/linkedin-logo.png" width={100} height={100} alt="mail" />
        </div>
        <h2>LinkedIn</h2>
        <a href="http://www.linkedin.com/in/maximiliano-coletti-556a67233">
          Maximiliano Coletti
        </a>
      </article>
    </section>
  );
};

export default ContactCard;
