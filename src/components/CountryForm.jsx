import React, { useEffect, useState } from "react";

import { Button, TextField } from "@mui/material";
import ApolloClient, { gql } from "apollo-boost";

import CountryResults from "./CountryResults";
import { enviroment } from "../enviroment";

const client = new ApolloClient({
  uri: enviroment.API_URL,
});

function CountryForm(value) {

  const getCountries = (value, groupBy) => {
    const countries = client
      .query({
        query: gql`
          query {
            countries(filter: { code: { in: "${value.toUpperCase()}" } }) {
              code,
              name,
              emoji,
              phone,  
              continent {
                code,
                name,
              },
               languages {
                name,
                native,
              }
            }
          }
        `,
      })
      .then((result) => {
        setCountries(result.data.countries);
      });
      setGroupBy(groupBy)
  };

  useEffect(() => {
    getCountries(filter.search, 'country')
  }, [])

  const [filter, setfilter] = useState({
    search: "UY",
  });
  const [countries, setCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [groupBy, setGroupBy] = useState([])

  const handleInputChange = (event) => {
    setfilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="countryForm">
      <form className="row">
        {/* <h1 className="image-title">Country search</h1> */}
        <div className="form">
          <TextField
            type="text"
            placeholder="Search country..."
            className="form-control a"
            name="search"
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            className="button b "
            onClick={() => getCountries(filter.search, 'country')}
          >
            Agrupar por continente
          </Button>
          <Button
            variant="contained"
            className="button c"
            onClick={() => getCountries(filter.search, 'language')}
          >
            Agrupar por lenguaje
          </Button>
        </div>
      </form>
      <div className="country-result">
        <CountryResults countryResult={countries} groupBy={groupBy}/>
      </div>
    </div>
  );
}

export default CountryForm;
