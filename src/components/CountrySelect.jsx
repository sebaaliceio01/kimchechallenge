import React, { useEffect, useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { DialogActions, DialogContent } from "@mui/material";
import { Button } from "@mui/material";

function CountrySelect(props) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleListItemClick = (value) => {
      onClose(value);
    };
  
    useEffect(() => {
      console.log(props.result);
    }, []);
  
    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>More information</DialogTitle>
        <DialogContent>
          <div className="dialog-body">
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  export default CountrySelect;
  