import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Country from "./Components/Country/Country";
import Cart from "./Components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country]; // ... means copy the cart from its location
    setCart(newCart);
  };

  return (
    <div className="App">
      <h1>country loaded:{countries.length}</h1>
      <h4>Country added: {cart.length}</h4>
      <Cart cart={cart}></Cart>

      <ul>
        {countries.map((country) => (
          <Country
            country={country}
            handleAddCountry={handleAddCountry}
            key={country.alpha3Code}
          >
            {" "}
          </Country>
        ))}
      </ul>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
