import React, { useState, createRef, useEffect } from "react";
import { useStyles } from "./sideNavStyles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { Grid, Typography, Divider, Box, withWidth } from "@material-ui/core";
import { SideNavContent } from "../../assets/constants/TextDetails";
import CustomDrawer from "../Drawers/CustomDrawer";
import CustomEventDrawer from "../Drawers/CustomEventDrawer";

function SideNav({ width }) {
  const styles = useStyles();
  const [toggleIcon, settoggleIcon] = useState(false);
  const [eventToggle, seteventToggle] = useState(false);
  const menuDrawer = createRef();
  const eventDrawer = createRef();
  const mobileDown = /xs/.test(width);

  const openBurgerMenu = () => {
    settoggleIcon(!toggleIcon);
    //   Drawer call
  };
  const openRecent = () => {
    seteventToggle(!eventToggle);
    //   Drawer call
  };

  useEffect(() => {
    if (mobileDown) {
      seteventToggle(false);
    }
  }, [mobileDown]);

  return (
    <Grid container direction="column" className={styles.rootContainer}>
      <Grid
        item
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <div className={styles.menuContaiiner} onClick={openBurgerMenu}>
          {toggleIcon ? (
            <Box aria-label="Close" className={styles.iconButton}>
              <CloseRoundedIcon />
            </Box>
          ) : (
            <Box aria-label="Menu" className={styles.iconButton}>
              <MenuRoundedIcon />
            </Box>
          )}
          <Typography variant="h5" className={styles.menuTypo}>
            {SideNavContent.Menu}
          </Typography>
        </div>
      </Grid>
      <Divider style={{ background: "#000", marginTop: 30 }} />
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "70vh" }}
      >
        <div className={styles.menuContaiiner} onClick={openRecent}>
          {eventToggle ? (
            <Box aria-label="Backward Arrow" className={styles.iconButton}>
              <ArrowBackRoundedIcon />
            </Box>
          ) : (
            <Box aria-label="Forward Arrow" className={styles.iconButton}>
              <ArrowForwardRoundedIcon />
            </Box>
          )}
          <Typography variant="h5" className={styles.eventTypo}>
            {SideNavContent.RecentEvent}
          </Typography>
        </div>
      </Grid>
      <CustomDrawer
        drawer={toggleIcon}
        drawerRef={menuDrawer}
        onCloseHnadler={openBurgerMenu}
      />
      <CustomEventDrawer
        drawer={eventToggle}
        drawerRef={eventDrawer}
        onCloseHnadler={openRecent}
      />
    </Grid>
  );
}

export default withWidth()(SideNav);
