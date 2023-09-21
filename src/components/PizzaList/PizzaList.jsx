import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";

function PizzaList({ fetchPizza }) {
  // let [artists, setArtists] = useState([]);
    console.log()
  const pizzaList= useSelector((store) => store.pizzaReducer);

  return (
    <div>
      <table>
        <tbody>
          {pizzaList.map((pizza) => {
            return (
              <PizzaListItem
                key={pizza.id}
                fetchPizza={fetchPizza}
                pizza = {pizza}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PizzaList;

