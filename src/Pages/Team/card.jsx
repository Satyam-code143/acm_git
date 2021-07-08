import React, { useState, useEffect, useRef } from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import { useStyles } from "./teamStyles";
import Image from "../../assets/images/students.jpg";
import Aos from "aos";

export default function TeamCard({ data }) {
  const styles = useStyles();
  const [showFlag, setShowFlag] = useState({ flag: false, id: "" });
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setShowFlag({
        ...showFlag,
        flag: false,
        id: "",
      });
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <Grid container justify="space-around">
      {data.map(({ id, name, role, img, description }) => (
        <Paper
          elevation={3}
          className={styles.teamPaper}
          component={motion.div}
          key={id}
          data-aos="fade-up"
        >
          <motion.img
            ref={myRef}
            src={Image}
            alt="Student Image"
            className={styles.teamProfileImage}
            initial={{ y: -40 }}
            whileHover={{ y: -80, scale: 1.1 }}
            onHoverStart={(e, action) => {
              setShowFlag({
                ...showFlag,
                flag: true,
                id: id,
              });
            }}
            onHoverEnd={(e, action) => {
              setShowFlag({
                ...showFlag,
                flag: false,
                id: "",
              });
            }}
            onClick={() => {
              setShowFlag({
                ...showFlag,
                flag: true,
                id: id,
              });
            }}
          />
          <motion.div className={styles.teamContent} initial={{ y: 75 }}>
            <Typography
              variant="h6"
              color="initial"
              className={styles.nameStyle}
            >
              {name}
            </Typography>
            {showFlag.flag && showFlag.id === id ? (
              <Typography
                variant="subtitle1"
                color="initial"
                className={styles.descriptionStyle}
              >
                ( {role} )
              </Typography>
            ) : null}
          </motion.div>
        </Paper>
      ))}
    </Grid>
  );
}
