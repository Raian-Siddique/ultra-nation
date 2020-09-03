import React from "react";
import "./country.css";

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const flagStyle = { height: 150, width: 250 };

  return (
    <div>
      {/* <img className="country-flag" src={flag} alt="" /> */}
      <img style={flagStyle} src={flag} alt="" />

      <h2>This is: {name}</h2>
      <h4>Population: {population}</h4>
      <p>
        {" "}
        <small>Region: {region}</small>{" "}
      </p>
    </div>
  );
};

export default Country;
