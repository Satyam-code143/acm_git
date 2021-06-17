import React, { useEffect, forwardRef, useState, createRef } from "react";
import {
  Drawer,
  Grid,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import { useStyles } from "./drawerStyle";
import BlackLogo from "../../assets/images/BlackLogo.png";
import { MenuConstants } from "../../assets/constants/TextDetails";
import Aos from "aos";
import { motion } from "framer-motion";
import Students from "../../assets/images/students.jpg";
import Students2 from "../../assets/images/students2.jpg";

const EventList = [
  {
    id: 0,
    name: "Packathon",
    description: "Eu et veniam officia aute laboris eu eu.",
  },
  {
    id: 1,
    name: "Hacathon",
    description: "Eu et veniam officia aute laboris eu eu.",
  },
  {
    id: 3,
    name: "Quiz",
    description: "Eu et veniam officia aute laboris eu eu.",
  },
];

function CustomEventDrawer({ drawer, drawerRef, onCloseHnadler }) {
  const styles = useStyles();
  const [showFlag, setShowFlag] = useState({ flag: false, id: undefined });
  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
        <Grid item container sm={12} style={{ height: "100%" }}>
          <Grid item sm={1}></Grid>
          <img
            src={BlackLogo}
            alt="ACM-Logo"
            data-aos="fade-down"
            height="80%"
          />
        </Grid>
        <Grid
          item
          container
          sm={12}
          direction="row"
          style={{ height: "100%" }}
          justify="space-around"
        >
          {EventList.map(({ id, name, description }) => (
            <Grid
              key={id}
              item
              container
              sm={3}
              direction="column"
              justify="space-between"
              alignItems="center"
              data-aos="fade-up"
              component={motion.div}
              onHoverStart={(e) => {
                setShowFlag({
                  ...showFlag,
                  flag: true,
                  id: id,
                });
              }}
              onHoverEnd={(e) => {
                setShowFlag({
                  ...showFlag,
                  flag: false,
                  id: undefined,
                });
              }}
              onClick={(e) => {
                setShowFlag({
                  ...showFlag,
                  flag: true,
                  id: id,
                });
              }}
            >
              <Paper
                elevation={0}
                style={{
                  width: "100%",
                  height: "88%",
                  backgroundImage: "url(" + Students + ")",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Paper>
              <Typography
                variant="h5"
                style={{
                  color: "#fff",
                  textTransform: "capitalize",
                  fontFamily: "Roboto",
                }}
              >
                {name}
              </Typography>
              {showFlag.flag && showFlag.id === id ? (
                <Card className={styles.hoverCard} data-aos="fade-up">
                  <CardContent>
                    <Typography
                      className={styles.hoverTitle}
                      gutterBottom
                      variant="h5"
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className={styles.hoverDescription}
                    >
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" className={styles.hoverButton}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              ) : null}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default CustomEventDrawer;
