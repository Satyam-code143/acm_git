import React, { useEffect, forwardRef } from "react";
import { Drawer, Grid, Button } from "@material-ui/core";
import { useStyles } from "./drawerStyle";
import BlackLogo from "../../assets/images/BlackLogo.png";
import { MenuConstants } from "../../assets/constants/TextDetails";
import Aos from "aos";
import { motion } from "framer-motion";

function CustomDrawer({ drawer, drawerRef, onCloseHnadler }) {
  const styles = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const CustomButton = forwardRef((props, ref) => (
    <Button
      className={styles.menuButtons}
      varient="text"
      disableRipple
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      component={motion.a}
    >
      {props.name}
    </Button>
  ));

  return (
    <Drawer
      ref={drawerRef}
      anchor="right"
      open={drawer}
      onClose={onCloseHnadler}
      className={styles.drawerStyle}
      classes={{
        paper: styles.drawerPaper,
      }}
      BackdropProps={{ invisible: true }}
    >
      <Grid container direction="row" justify="space-between">
        <Grid item container sm={12}>
          <Grid item sm={1}></Grid>
          <img
            src={BlackLogo}
            alt="ACM-Logo"
            data-aos="fade-down"
            height="80%"
          />
        </Grid>
        <Grid item container sm={12} direction="row">
          <Grid item sm={3}></Grid>
          <Grid container item sm={3} direction="column" data-aos="fade-left">
            <CustomButton name={MenuConstants.About} />
            <CustomButton name={MenuConstants.Event} />
            <CustomButton name={MenuConstants.Gallery} />
            <CustomButton name={MenuConstants.OurTeam} />
          </Grid>
          <Grid item sm={6}></Grid>
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default CustomDrawer;
