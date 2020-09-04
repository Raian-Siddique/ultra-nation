import React from "react";
import "./country.css";

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const flagStyle = { height: 100, width: 150 };
  const countryStyle = {
    border: "3px solid salmon",
    margin: "30px",
    padding: "10px",
  };
  const handleAddCountry = props.handleAddCountry;
  return (
    <div style={countryStyle}>
      {/* <img className="country-flag" src={flag} alt="" /> */}
      <img style={flagStyle} src={flag} alt="" />

      <h2>This is: {name}</h2>
      <h4>Population: {population}</h4>
      <p>
        {" "}
        <small>Region: {region}</small>{" "}
      </p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
