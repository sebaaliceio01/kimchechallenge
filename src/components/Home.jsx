import React, { useEffect, useState } from "react";
import CountryForm from "./CountryForm";
import Header from "./Header";

function Home(props) {
  return (
    <div className="home">
      <Header />
      <CountryForm />
    </div>
  );
}

export default Home;
