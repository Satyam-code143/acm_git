import { makeStyles } from "@material-ui/core";
import BackgroundImage from "../../assets/images/Background for menu.png";

export const useStyles = makeStyles((theme) => ({
  drawerStyle: {
    width: "92%",
    flexShrink: 0,
  },
  drawerPaper: {
    width: "92%",
    height: "100vh",
    display: "flex",
    backgroundImage: `url(${BackgroundImage})`,
  },
  menuButtons: {
    fontFamily: "Lora",
    textTransform: "capitalize",
    background: "transparent",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    fontSize: 40,
    justifyContent: "flex-start",
    "&:hover": {
      background: "transparent",
    },
  },
  hoverCard: {
    width: 300,
    height: 280,
    marginTop: 5,
    backgroundColor: "rgba(0,0,0,0.9)",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: 200,
      height: 280,
    },
  },
  hoverTitle: {
    fontFamily: "Lora",
    color: "#00E29A",
  },
  hoverDescription: {
    color: "#C9C9C9",
  },
  hoverButton: {
    color: "#49D3A7",
    textTransform: "capitalize",
  },
}));
