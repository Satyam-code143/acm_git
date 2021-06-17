import { makeStyles } from "@material-ui/core";

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
  },
  infoContainer: {
    padding: "10px 0px 40px 10px",
  },

  dotGrid: {
    position: "absolute",
    zIndex: -1,
    bottom: "-81%",
    left: "40%",
    height: "40%",
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
  imgContainerRight: {
    background: "linear-gradient(#FFE664,#00C1B6)",
    opacity: 0.9,
    width: 156,
    height: 156,
    position: "absolute",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: "9%",
    [theme.breakpoints.between("xs", "sm")]: {
      width: 126,
      height: 126,
      borderRadius: 30,
    },
  },
  dotGridRight: {
    position: "absolute",
    zIndex: -1,
    bottom: "-131%",
    left: "15%",
  },
  paperInfo: {
    width: "100%",
    height: 200,
    border: "5px solid #0A559E",
    borderRadius: 10,
  },
  listStyle: {
    color: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
  },
  memTitle: {
    // textDecoration: "underline",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    // textDecorationColor: "#FFB800",
    borderBottom: "2px solid #FFB800",
    paddingBottom: 5,
  },

  // New styles

  infoPaperContainer: {
    width: "100%",
    height: 460,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 80,
  },
  infoPaper: {
    width: "59%",
    height: 304,
    borderRadius: 20,
    left: "10%",
    background: "rgba(2, 79, 155, 0.9)",
    boxShadow:
      "20px 34px 20px rgba(4, 37, 68, 0.07), 15px 17px 48px rgba(2, 79, 155, 0.35)",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      height: 110,
    },
  },
  dotGrid: {
    width: "100%",
    height: 202,
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    right: "17%",
    position: "relative",
    zIndex: -1,
    [theme.breakpoints.down("xs")]: {
      height: 110,
    },
  },
  imgContainer: {
    background: "linear-gradient(#FFE664,#00C1B6)",
    opacity: 0.9,
    width: 156,
    height: 156,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("xs", "sm")]: {
      width: 126,
      height: 126,
      borderRadius: 30,
    },
  },
  logoStyle: {
    width: "100%",
  },
  gridStyle: {
    width: "55%",
    height: "100%",
  },

  //

  //

  //
  infoPaperContainer2: {
    width: "80%",
    height: 392,
    display: "flex",
    marginTop: 80,
    padding: 50,
    alignSelf: "flex-end",
  },
  infoPaper2: {
    width: "59%",
    height: 304,
    borderRadius: 20,
    background: "rgba(2, 79, 155, 0.9)",
    boxShadow:
      "20px 34px 20px rgba(4, 37, 68, 0.07), 15px 17px 48px rgba(2, 79, 155, 0.35)",
    position: "absolute",
    right: 50,
  },
  dotGrid2: {
    width: "100%",
    height: 202,
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-end",
  },
}));
