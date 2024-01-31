import Image from "next/image";
import styles from "./arbre-carrousel.module.css";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import arbre from "../../assets/images/arbre.png";
import arbre1 from "../../assets/images/arbre1.webp";
import arbre2 from "../../assets/images/arbre2.jpeg";

import { useState } from "react";

export default function ArbreCarrousel() {
  const imgSrcs = [arbre, arbre1, arbre2];
  const [imgSrc, setImgSrc] = useState(arbre);
  return (
    <div>
      <Image src={imgSrc} alt="Arbre" width={350} height={350}></Image>
      <div className={styles.buttons}>
        <IconButton
          onClick={() => {
            setImgSrc(
              imgSrcs[
                (imgSrcs.indexOf(imgSrc) - 1 + imgSrcs.length) % imgSrcs.length
              ]
            );
          }}
        >
          <KeyboardArrowLeftIcon
            fontSize="large"
            color="success"
          ></KeyboardArrowLeftIcon>
        </IconButton>
        <IconButton
          onClick={() => {
            setImgSrc(imgSrcs[(imgSrcs.indexOf(imgSrc) + 1) % imgSrcs.length]);
          }}
        >
          <KeyboardArrowRightIcon
            fontSize="large"
            color="success"
          ></KeyboardArrowRightIcon>
        </IconButton>
      </div>
    </div>
  );
}
