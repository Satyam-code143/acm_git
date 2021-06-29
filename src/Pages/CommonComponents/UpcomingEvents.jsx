import React, { useEffect, useState, useRef } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { motion } from "framer-motion";
import Aos from "aos";
import { useStyles } from "./commonStyles";
import Students from "../../assets/images/students.jpg";

function UpcomingEvents({ data, title }) {
  const styles = useStyles();
  const [showFlag, setShowflag] = useState({ id: "", flag: false });
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setShowflag({ ...showFlag, id: "", flag: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Grid
      container
      item
      xs={12}
      direction="column"
      justify="center"
      alignItems="center"
      style={{ marginTop: 80 }}
    >
      <Typography variant="h4" className={styles.upTitle} data-aos="fade-up">
        {title}
      </Typography>
      <Grid
        container
        justify="center"
        style={{
          justifyContent: "space-around",
          width: "85%",
        }}
      >
        {data.map(({ id, image, title, descripition }, index) => {
          var color = {};
          {
            index % 3 === 0
              ? (color = { background: "#693F23" })
              : id % 3 === 1
              ? (color = { background: "#003F7D" })
              : (color = { background: "#007A53" });
          }
          return (
            <Grid
              key={id}
              item
              style={{
                marginTop: "15vh",
              }}
              data-aos="fade-up"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2 }}
                style={{ width: "100%" }}
              >
                <Paper elevation={3} square className={styles.paperStyle}>
                  <Paper
                    elevation={3}
                    square
                    style={{
                      backgroundImage: `url(${Students})`,
                    }}
                    className={styles.imgComponent}
                    component={motion.div}
                  >
                    <Paper
                      ref={myRef}
                      className={styles.innerButton}
                      style={color}
                      square
                      component={motion.div}
                      whileHover={{ height: 300 }}
                      id={id}
                      onHoverStart={() => {
                        setShowflag({ ...showFlag, id: id, flag: true });
                      }}
                      onHoverEnd={() => {
                        setShowflag({ ...showFlag, id: "", flag: false });
                      }}
                      onClick={() => {
                        setShowflag({ ...showFlag, id: id, flag: true });
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        {title}
                      </Typography>
                      {showFlag.flag && showFlag.id === id ? (
                        <Typography
                          variant="body2"
                          color="initial"
                          style={{ textAlign: "center", color: "#fff" }}
                        >
                          {descripition}
                        </Typography>
                      ) : null}
                    </Paper>
                  </Paper>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default UpcomingEvents;
