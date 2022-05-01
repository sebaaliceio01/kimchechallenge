import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  return (
    <div className="header">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button variant="primary" onClick={() => navigate("/")}>
              ¡Welcome!
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
