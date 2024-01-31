"use client";
import Navbar from "../components/navbar/navbar";
import styles from "./upload-page.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function UploadPage() {
  return (
    <div className={styles.uploadPage}>
      <Navbar></Navbar>
      <div className={styles.uploadBox}>
        <h1>Donne moi ton arbre</h1>
        <TextField variant="filled" placeholder="Nom de ton arbre"></TextField>
        <input
          type="file"
          accept="image/png, image/webp, image/gif, image/jpeg"
        ></input>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            alert(
              "Merci pour ton arbre je vais en prendre soin. (Sike j'ai pas de serveur)"
            );
          }}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
