//MENU ITEM

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import App from "../App/App";


function PizzaListItem({ fetchPizza, pizza, removePizzaFromOrder , menuItem}) {
  const [addedToOrder, setAddedToOrder] = useState(false);

  const {description, id, image_path, name, price} = pizza;
  console.log('this is pizza', pizza);

  // console.log('this is pizza', pizza);
  const dispatch = useDispatch();

  // const deletePizza = () => {
  //   dispatch({
  //     method: "DELETE",
  //     url: `/api/pizza/${pizza.id}`,
  //   })
  //     .then((response) => {
  //       fetchPizza();
  //     })
  //     .catch((error) => {
  //       console.log("error on delete: ", error);
  //     });
  // };

  // const deletePizza = () => {
  //   dispatch({
  //     type:"DELETE_PIZZA",
  //     payload: 
  //   })
  // }

  const toggleButton = (pizza) => {
    setAddedToOrder(!addedToOrder);
  };


  return (
    <div className="menuItem">
      <img className="picture" src={pizza.image_path} alt={pizza.name} />
      <p className="pizzaName">{pizza.name}</p>
      <p>{pizza.description}</p>
      <p className="pizzaPrice">{pizza.price}</p>
      <button onClick={toggleButton}>REMOVE</button>
    </div>
  );
}

export default PizzaListItem;
