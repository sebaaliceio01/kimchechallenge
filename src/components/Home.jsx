import ApolloClient, { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";
import { enviroment } from "../enviroment";

const client = new ApolloClient({
  uri: enviroment.API_URL,
});

function Home(props) {
  useEffect(() => {
    const countries = client
      .query({
        query: gql`
          query ($filter: CountryFilterInput) {
            countries(filter: $filter) {
              code
              capital
            }
          }
        `,
      })
      .then((result) => {
        setData(result.data.countries);
      });
  }, []);

  const [data, setData] = useState([]);

  const countriesData = data.map((result) => <div>{JSON.stringify(result)}</div>);

  return <div className="home">
      {countriesData}
  </div>;
}

export default Home;
