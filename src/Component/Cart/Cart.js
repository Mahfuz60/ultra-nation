import  React from "react";

const Cart = (props) => {
  let cart = props.cart;
  let totalPopulation = 0;
  for (let i = 0; i<cart.length; i++) {
   const country = cart[i];
  //  console.log(country)
   totalPopulation = totalPopulation +country.population;
  // console.log(totalPopulation);
   }
  // const totalPopulation=cart.reduce((sum,country)=>sum +country.population, 0);

  return (
      <div>
        <h4>Select Country:{cart}</h4>
        <h3>Total population:{totalPopulation}</h3>
      </div>
  );
};

export default Cart;
