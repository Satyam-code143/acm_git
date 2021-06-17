import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  upTitle: {
    textDecoration: "underline",
    color: "#693F23",
    textAlign: "center",
    textTransform: "upperCase",
    fontWeight: "bold",
    textDecorationColor: "#004488",
  },
  paperStyle: {
    width: 300,
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  imgComponent: {
    width: "100%",
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  innerButton: {
    width: "70%",
    height: 35,
    color: "#fff",
    display: "flex",
    cursor: "pointer",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
