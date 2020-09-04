import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  // method-1[traditional way using for loop]

  //   let totalPopulation = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     const country = cart[i];
  //     totalPopulation += country.population;
  //   }
  // method-2 using reduce.

  const totalPopulation = cart.reduce(
    (sum, country) => sum + country.population,
    0
  );

  return (
    <div>
      <h2>This is a cart: {cart.length}</h2>
      <p>Total Population: {totalPopulation}</p>
    </div>
  );
};

export default Cart;
