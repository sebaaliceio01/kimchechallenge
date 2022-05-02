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

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;