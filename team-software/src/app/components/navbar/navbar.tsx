"use client";
import styles from "./navbar.module.css";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import Link from "next/link";

export default function Navbar() {
  const moveNavBar = () => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    if (navbar) {
      navbar.classList.toggle(styles.navbarOpen);
    }
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarRight}>
        <Link
          href="/"
          style={{
            width: "100%",
            height: "100px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className={styles.navbarButton}>
            <h1>Home</h1>
          </div>
        </Link>
        <Link
          href="/upload"
          style={{
            width: "100%",
            height: "100px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <div
            className={styles.navbarButton}
            style={{
              borderBottom: "1px solid black",
              borderTop: "1px solid black",
            }}
          >
            <h1>Upload</h1>
          </div>
        </Link>
        <Link
          href="/arbre"
          style={{
            width: "100%",
            height: "100px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <div className={styles.navbarButton}>
            <h1>Arbre</h1>
          </div>
        </Link>
      </div>
      <div className={styles.navbarLeft}>
        <div className={styles.button} onClick={moveNavBar}>
          <IconButton>
            <ReorderIcon color="success" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
