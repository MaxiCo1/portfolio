import styles from "@/styles/Home.module.css";
import { useAppContext } from "@/contexts/AppContext";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <h1>Maxi Coletti</h1>
      </div>
    </main>
  );
}
