import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import gitImg from '../assets/codicon_github-alt.svg'

function Header() {
  let navigate = useNavigate();

  const gitIcon = () => {
    return <img src={gitImg} className="header-icon" />
  }

  return (
    <div className="header">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button variant="primary" onClick={() => navigate("/")}>
              ¡Welcome!
            </Button>
          </Typography>
            <a href="https://github.com/sebaaliceio01/kimchechallenge" target={'_blank'}>{gitIcon()}</a> 
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
