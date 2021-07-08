import React, { useEffect } from "react";
import { useStyles } from "./teamStyles";
import { Grid, Typography } from "@material-ui/core";
import TeamCard from "./card";
import Aos from "aos";

const data = [
  {
    id: 0,
    name: "Satyam",
    role: "Nothing",
    description: "",
    img: "",
  },
  // {
  //   id: 1,
  //   name: "",
  //   role: "",
  //   description: "",
  //   img: "",
  // },
];

function Team() {
  const styles = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Grid container direction="column">
      <div className={styles.titleContainer}>
        <Typography
          variant="h2"
          className={styles.pageTitleStyle}
          data-aos="fade-up"
        >
          Meet our Team
        </Typography>
      </div>
      <Grid container item xs={12} alignItems="center" justify="center">
        <TeamCard data={data} />
      </Grid>
    </Grid>
  );
}

export default Team;
