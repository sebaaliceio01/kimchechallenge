import React from "react";

const styles = {
  countryResults: {
    margin: "25px",
  },
};

function CountryResults(props) {
    
  const results = props.countryResult.map((result) => (
      <div>
          {result.code}
          {result.countries.map((result) => {
              console.log(result.languages)
          })}
      </div>
  ));

  return <div className="country-results" style={styles.countryResults}>
      {results}
  </div>;
}

export default CountryResults;
