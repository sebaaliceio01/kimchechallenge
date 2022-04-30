//React components
import React, { useEffect, useState } from "react";

//Material-UI
import { Button, TextField } from "@mui/material";
import ApolloClient, { gql } from "apollo-boost";

//My own components
import CountryResults from "./CountryResults";
import { enviroment } from "../enviroment";
import { useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: enviroment.API_URL,
});

function CountryForm() {
  const fetchData = (value) => {
    const continents = client
      .query({
        query: gql`
          query {
            continents(filter: { code: { in: "${value}" } }) {
              code
              countries {
                code
                name
                languages {
                  code
                  native
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        setData(result.data.continents);
        console.log(result.data.continents);
      });
  };

  const [datos, setDatos] = useState({
    search: "Nature",
  });
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="countryForm">
      <form className="row">
        <h1 className="image-title">Country search</h1>
        <div className="form">
          <TextField
            type="text"
            placeholder="Search country..."
            className="form-control"
            name="search"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            className="button"
            onClick={() => fetchData(datos.search)}
          >
            Buscar
          </Button>
        </div>
      </form>
      <div className="country-result">
        <CountryResults />
      </div>
    </div>
  );
}

export default CountryForm;

// onClick={() => fetchData(datos.search)}
