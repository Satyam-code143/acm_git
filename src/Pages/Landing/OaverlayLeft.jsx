import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import DottedGrid from "../../assets/images/Grid.png";
import { useStyles } from "./landingStyles";
import BlackLogo from "../../assets/images/BlackLogo.png";

function OaverlayLeft() {
  const styles = useStyles();

  return (
    <div className={styles.infoPaperContainer}>
      <div className={styles.infoPaper1}>
        <div className={styles.imgContainer}>
          <img src={BlackLogo} className={styles.logoStyle} />
        </div>
        <div className={styles.infoContainer}></div>
      </div>
      <div className={styles.dotGrid}>
        <img src={DottedGrid} alt="Dot Grid" className={styles.gridStyle} />
      </div>
    </div>
  );
}

export default OaverlayLeft;
