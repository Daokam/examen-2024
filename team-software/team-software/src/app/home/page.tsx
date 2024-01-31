import styles from "./home-page.module.css";
import logo from "../assets/images/logo.png";
import Image from "next/image";
import arbre from "../assets/images/arbre.png";
import Navbar from "@/app/components/navbar/navbar";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Navbar></Navbar>
      <Image
        className={styles.arbre1}
        src={arbre}
        alt="Arbre"
        width={350}
        height={350}
      ></Image>
      <Image
        className={styles.arbre2}
        src={arbre}
        alt="Arbre"
        width={350}
        height={350}
      ></Image>
      <h1>CSGames 2024</h1>
      <Image src={logo} alt="Logo" width={450} height={450}></Image>

      <p className={styles.text}>
        Nous sommes en 2024 et nous apercevons une crise incommensurables. Non
        seulement l'orthographe de celui qui a fait ce site est merdique mais en
        plus un excellent comité est à la recherche de 16 membres pour la
        délégation des CSGames 2024. Qui ressortira vainceur? Qui détestera rust
        après 5 minutes passées sur l'exam de Marc-Antoine? Et bien sur, qui
        sera sélectionné? Vous le saurez dans le prochain épisode de j'en ai
        marre d'écrire merci d'avoir lu!
      </p>
    </div>
  );
}
