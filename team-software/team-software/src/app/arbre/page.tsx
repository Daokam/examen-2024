"use client";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import styles from "./arbre-page.module.css";
import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import ArbreCarrousel from "../components/arbre-carrousel/arbre-carrousel";
import { useState } from "react";
import ArbreList from "../components/arbre-list/arbre-list";

export default function ArbrePage() {
  const [isList, setIsList] = useState(false);

  const getDisplay = () => {
    if (isList) {
      return <ArbreList></ArbreList>;
    } else {
      return <ArbreCarrousel></ArbreCarrousel>;
    }
  };
  const getButtonText = () => {
    if (isList) {
      return "Carrousel";
    } else {
      return "List";
    }
  };
  return (
    <div className={styles.arbrePage}>
      <Navbar></Navbar>
      <h1 className={styles.title}>Wow bel arbre!</h1>
      <div className={styles.arbreBox}>
        <Button
          color="success"
          className={styles.listButton}
          onClick={() => {
            setIsList(!isList);
          }}
        >
          {getButtonText()}
        </Button>
        {getDisplay()}
      </div>
    </div>
  );
}
