import { makeStyles } from "@material-ui/core";

const dotGrid = {
  width: "100%",
  height: 202,
  display: "flex",
  alignSelf: "flex-end",
  position: "relative",
  zIndex: -1,
};

const infoPaper = {
  width: "59%",
  height: 304,
  borderRadius: 20,
  background: "rgba(2, 79, 155, 0.9)",
  boxShadow:
    "20px 34px 20px rgba(4, 37, 68, 0.07), 15px 17px 48px rgba(2, 79, 155, 0.35)",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageContainer = {
  background: "linear-gradient(#FFE664,#00C1B6)",
  opacity: 0.9,
  width: "20%",
  borderRadius: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
};

export const useStyles = makeStyles((theme) => ({
  imgDivStyle: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imgStyle: {
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: "50vh",
    },
  },
  infoContainer: {
    padding: "10px 0px 40px 10px",
  },

  infoTitle: {
    color: "#fff",
    fontWeight: "bold",
    padding: "10px 0px 10px 0px",
  },
  infoDescription: {
    color: "rgba(255,255,255,0.95)",
    padding: "10px 0px 10px 0px",
    fontFamily: "Roboto",
  },
  listStyle: {
    color: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
  },
  memTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    borderBottom: "2px solid #FFB800",
    paddingBottom: 5,
  },

  // OverlayLeft Styles

  infoPaper1: {
    ...infoPaper,
    left: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      height: 150,
    },
  },
  imgContainer: {
    ...imageContainer,
    left: "-8.5%",
  },
  logoStyle: {
    width: "100%",
  },
  dotGrid: {
    ...dotGrid,
    justifyContent: "flex-end",
    [theme.breakpoints.down("xs")]: {
      height: 110,
    },
  },
  gridStyle: {
    width: "55%",
    height: "100%",
    right: "17%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
      width: "70%",
      right: 10,
    },
  },

  //
  infoPaperContainer: {
    width: "100%",
    height: 460,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    [theme.breakpoints.down("xs")]: {
      height: 280,
      marginTop: 20,
    },
  },
  //

  //Overlay Right
  infoPaper2: {
    ...infoPaper,
    right: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "85%",
      height: 150,
    },
  },
  dotGrid2: {
    ...dotGrid,
    justifyContent: "flex-start",
    [theme.breakpoints.down("xs")]: {
      height: 110,
    },
  },
  imgContainer2: {
    ...imageContainer,
    right: "-8.5%",
  },
  gridStyle2: {
    width: "55%",
    height: "100%",
    left: "17%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "70%",
      width: "70%",
      left: 10,
    },
  },
}));
