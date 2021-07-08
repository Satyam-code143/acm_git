import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  titleContainer: {
    width: "100%",
  },
  pageTitleStyle: {
    textDecoration: "underline",
    color: "#693F23",
    textTransform: "upperCase",
    fontWeight: "bold",
    textDecorationColor: "#06AD78",
    margin: 30,
  },
  teamPaper: {
    width: 390,
    height: 220,
    borderRadius: 25,
    marginBottom: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  teamProfileImage: {
    width: "80%",
    height: 177,
    borderRadius: 25,
  },
  teamContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  nameStyle: {
    fontSize: 24,
    fontWeight: "700",
  },
  descriptionStyle: {
    fontWeight: "700",
  },
}));
