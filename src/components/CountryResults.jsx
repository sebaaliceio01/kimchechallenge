import { Button } from "@mui/material";
import React, { useState } from "react";
import Dialog from "./CountrySelect";

const styles = {
  countryResults: {
    margin: "25px",
  },
  title: {
    justifyContent: "center",
    display: "flex",
    gap: "10px",
    fontSize: "24px",
  },
  groupyBy: {
    fontSize: "32px",
    marginBottom: "15px"
  },
  content: {
    marginBottom: "5px",
  },
  dialogTitle: {
    textAlign: "center",
  },
  ulStyle: {
    listStyle: "none",
    marginBottom: "5px",
    padding: "0px",
  }
};

function CountryResults(props) {
  const [open, setOpen] = useState(false);

  const [countryCode, setCountrycode] = useState('');

  const handleClose = (value) => {
    setOpen(false);
  };

  const handleClickOpen = (result) => {
    setOpen(true);
    setCountrycode(result)
  };

  const dialogData = props.countryResult.map((result) => (
    <div>
      <h2 style={styles.dialogTitle}><b>{result.name}</b></h2>
      <ul style={styles.ulStyle}>
        <li style={styles.content}>Continente: <b>{result.continent.name}</b></li>
        <li style={styles.content}>Capital: <b>{result.capital}</b></li>
        {result.languages.map((result) => (
          <div>
            <li style={styles.content}>Language: <b>{result.name}</b></li>
            <li style={styles.content}>Native language: <b>{result.native}</b></li>
          </div>
        ))}
      </ul>
    </div>
  ))

  const languageResult = props.countryResult.map((result) => (
    <div>
      {result.languages.map((result) => (
        <div>
          <h1 style={styles.groupyBy}>{result.name}</h1>
        </div>
      ))}
      <div className="image-grid">
        <div style={styles.title}>
          <span>{result.name}</span>
          <icon className="country-icon">{result.emoji}</icon>
        </div>
        <div className="divider">
          <div className="divider-blue"></div>
        </div>
        <div className="content">
          <ul>
            <li style={styles.content}>Code phone: <b>+{result.phone}</b></li>
            <li style={styles.content}>Continent: <b>{result.continent.name}</b></li>
          </ul>
        </div>
        <div className="card-footer">
          <Button variant="outlined" onClick={() => handleClickOpen(result.code)}>
            More information
          </Button>
        </div>
      </div>
    </div>
  ));

  const countryResult = props.countryResult.map((result) => (
    <div>
      <h1 style={styles.groupyBy}>{result.continent.name}</h1>
      <div className="image-grid">
        <div style={styles.title}>
          <span>{result.name}</span>
          <icon className="country-icon">{result.emoji}</icon>
        </div>
        <div className="divider">
          <div className="divider-blue"></div>
        </div>
        <div className="content">
          <ul>
            <li style={styles.content}>Code phone: <b>+{result.phone}</b></li>
            {result.languages.map((result) => (
              <div>
                <li style={styles.content}>Language: <b>{result.name}</b></li>
                <li style={styles.content}>Native language: <b>{result.native}</b></li>
              </div>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <Button variant="outlined" onClick={() => handleClickOpen(result.code)}>
            More information
          </Button>
        </div>
      </div>
    </div>
  ));

  //Muestro la informacion dependiendo de como quiero agrupar los datos
  function groupBy() {
    if (props.groupBy == 'country') {
      return countryResult
    } else if (props.groupBy == 'language') {
      return languageResult
    }
  }

  return <div className="country-results" style={styles.countryResults}>
    <div className="countries">
      {groupBy()}
    </div>
    <Dialog open={open} onClose={handleClose} result={dialogData} />
  </div>;
}

export default CountryResults;
