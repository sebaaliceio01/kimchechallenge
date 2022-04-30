import React from "react";
import "./App.css";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { enviroment } from "./enviroment";

export const client = new ApolloClient({
  uri: enviroment.API_URL,
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  </ApolloProvider>
);

export default App;

// query {
//   countries(filter: { code: {  } , currency: {  }, continent: {} }) {
//     code,
//     capital,
//     code
//   }
// }
