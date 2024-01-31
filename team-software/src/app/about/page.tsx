import styles from "./about-page.module.css";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import arbre from "../assets/images/arbre.png";
import Navbar from "@/app/components/navbar/navbar";

export default function HomePage() {
  return (
    <div className={styles.aboutPage}>
      <Navbar />
      <h1>C'est quoi les CS?????</h1>
      <Image src={logo} alt="Logo" width={450} height={450}></Image>

      <h1>Compé ou on a du fun créée par:</h1>
      <p className={styles.text}>
        Pas trouvé les créateurs mais ils sont surement nice :)
      </p>
    </div>
  );
}
