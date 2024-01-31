import styles from "./arbre-list.module.css";
import arbre from "../../assets/images/arbre.png";
import arbre1 from "../../assets/images/arbre1.webp";
import arbre2 from "../../assets/images/arbre2.jpeg";
import Image from "next/image";

export default function ArbreList() {
  return (
    <div className={styles.arbreList}>
      <div className={styles.arbreBox}>
        <Image src={arbre} alt="Arbre" width={200} height={200}></Image>{" "}
        <p>Arbre liquide</p>
      </div>
      <div className={styles.arbreBox}>
        <Image src={arbre1} alt="Arbre1" width={200} height={200}></Image>{" "}
        <p>Arbre solide</p>
      </div>
      <div className={styles.arbreBox}>
        <Image src={arbre2} alt="Arbre2" width={200} height={200}></Image>{" "}
        <p>Un autre arbre solide</p>
      </div>
    </div>
  );
}
