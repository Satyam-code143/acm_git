import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import SideNav from "../SideNav/SideNav";
import Aos from "aos";
import Carsousel from "./Carsousel";
import OaverlayLeft from "./OaverlayLeft";
import OverlayRight from "./OverlayRight";
import { useStyles } from "./landingStyles";
import UpcomingEvents from "../CommonComponents/UpcomingEvents";

// Temp data
const UpEvents = [
  {
    id: 0,
    image: "Img1",
    title: "Packathon",
    descripition: "Adipisicing occaecat qui non laborum consequat enim.",
  },
  {
    id: 1,
    image: "Img1",
    title: "Packathon",
    descripition: "Adipisicing occaecat qui non laborum consequat enim.",
  },
  {
    id: 2,
    image: "Img1",
    title: "Packathon",
    descripition: "Adipisicing occaecat qui non laborum consequat enim.",
  },
];
// Temp data

function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const styles = useStyles();

  return (
    <Grid container>
      <Grid item container xs={false} sm={1} data-aos="fade-right">
        <SideNav />
      </Grid>
      <Grid item container xs={12} sm={11} data-aos="fade-up">
        <Carsousel />
      </Grid>
      <Grid container item xs={12} direction="row" data-aos="fade-up">
        <OaverlayLeft />
      </Grid>
      <Grid container item xs={12} direction="row" data-aos="fade-up">
        <OverlayRight />
      </Grid>
      <Grid container item xs={12} data-aos="fade-up">
        <Grid container item xs={1}></Grid>
        <Grid container item xs={10}>
          <Paper elevation={12} className={styles.paperInfo}></Paper>
        </Grid>
        <Grid container item xs={1}></Grid>
      </Grid>
      <UpcomingEvents data={UpEvents} title="Upcoming Events" />
      <Grid
        container
        item
        xs={12}
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginTop: 80,
          background: "#003F7D",
          marginBottom: 160,
          paddingTop: 40,
          paddingBottom: 40,
        }}
        data-aos="fade-up"
      >
        <Typography variant="h4" className={styles.memTitle}>
          Member Benifit of ACM
        </Typography>
        <Grid container item sm={12} direction="row" alignItems="center">
          <Grid
            container
            item
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ul>
              <li>
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.listStyle}
                >
                  Voluptate anim magna minim nulla exercitation laboris enim
                  dolor Lorem magna.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.listStyle}
                >
                  Voluptate anim magna minim nulla exercitation laboris enim
                  dolor Lorem magna.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.listStyle}
                >
                  Voluptate anim magna minim nulla exercitation laboris enim
                  dolor Lorem magna.
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid
            container
            item
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <ul>
              <li>
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.listStyle}
                >
                  Voluptate anim magna minim nulla exercitation laboris enim
                  dolor Lorem magna.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.listStyle}
                >
                  Voluptate anim magna minim nulla exercitation laboris enim
                  dolor Lorem magna.
                </Typography>
              </li>
              <li>
                <Typography
                  variant="body2"
                  component="p"
                  className={styles.listStyle}
                >
                  Voluptate anim magna minim nulla exercitation laboris enim
                  dolor Lorem magna.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
