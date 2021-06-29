import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import UpcomingEvents from "../CommonComponents/UpcomingEvents";
import { useStyles } from "./eventStyles";

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

const PastEvents = [
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
  {
    id: 3,
    image: "Img1",
    title: "Packathon",
    descripition: "Adipisicing occaecat qui non laborum consequat enim.",
  },
  {
    id: 4,
    image: "Img1",
    title: "Packathon",
    descripition: "Adipisicing occaecat qui non laborum consequat enim.",
  },
  {
    id: 5,
    image: "Img1",
    title: "Packathon",
    descripition: "Adipisicing occaecat qui non laborum consequat enim.",
  },
];

// Temp data

function Events() {
  const styles = useStyles();
  return (
    <Grid container direction="column" alignItems="center">
      <div className={styles.titleContainer}>
        <Typography variant="h2" className={styles.pageTitleStyle}>
          Events
        </Typography>
      </div>
      <UpcomingEvents data={UpEvents} title="Upcoming Events" />
      <UpcomingEvents data={PastEvents} title="Past Events" />
    </Grid>
  );
}

export default Events;
