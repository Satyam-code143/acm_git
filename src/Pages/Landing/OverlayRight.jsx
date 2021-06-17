import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import DottedGrid from "../../assets/images/Grid.png";
import { useStyles } from "./landingStyles";
import BlackLogo from "../../assets/images/BlackLogo.png";

function OverlayRight() {
  const styles = useStyles();
  return (
    <div className={styles.infoPaperContainer}>
      <div className={styles.infoPaper2}></div>
      <div className={styles.dotGrid2}>
        <img src={DottedGrid} alt="Dot Grid" className={styles.gridStyle} />
      </div>
    </div>
  );
}

export default OverlayRight;
