import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useAppContext } from "@/contexts/AppContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { dataLanguage, handleDataLanguage } = useAppContext();
  const [showItem, setShowItem] = useState(true);
  const pathname = usePathname();
  const handleShow = () => {
    setShowItem(!showItem);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.ul}>
        {dataLanguage.navbar.map((info, index) => {
          if (info.url === "/" && pathname === "/") {
            return null;
          }
          return (
            <li
              key={index}
              className={pathname == info.url ? styles.inIt : null}
            >
              <Link href={info.url}>{info.text}</Link>
            </li>
          );
        })}
        <li>
          <div className={styles.dropdown}>
            <Image
              src="/language-icon.svg"
              width={30}
              height={30}
              alt="language"
              className={showItem ? styles.show : styles.hidden}
              onClick={() => {
                handleShow();
              }}
            />
            <div className={!showItem ? styles.show : styles.hidden}>
              <button
                onClick={() => {
                  handleDataLanguage("esp");
                  handleShow();
                }}
                className={styles.languageButton}
              >
                Español
              </button>

              <button
                onClick={() => {
                  handleDataLanguage("eng");
                  handleShow();
                }}
                className={styles.languageButton}
              >
                English
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
