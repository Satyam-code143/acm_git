import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import DottedGrid from "../../assets/images/Grid.png";
import { useStyles } from "./landingStyles";
import BlackLogo from "../../assets/images/BlackLogo.png";

function OverlayRight() {
  const styles = useStyles();
  return (
    <div className={styles.infoPaperContainer}>
      <div className={styles.infoPaper2}>
        <div className={styles.infoContainer}></div>
        <div className={styles.imgContainer2}>
          <img src={BlackLogo} className={styles.logoStyle} />
        </div>
      </div>
      <div className={styles.dotGrid2}>
        <img src={DottedGrid} alt="Dot Grid" className={styles.gridStyle2} />
      </div>
    </div>
  );
}

export default OverlayRight;
