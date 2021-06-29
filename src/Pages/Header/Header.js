import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header() {
  return (
    <AppBar
      position="
        fixed"
    >
      <Toolbar>
        <img src={require("../../assets/images/BlackLogo.png")} alt="" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
