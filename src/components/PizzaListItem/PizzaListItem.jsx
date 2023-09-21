import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

function PizzaListItem({ fetchPizza, pizza }) {
  console.log(pizza);
  const dispatch = useDispatch();

  const deletePizza = () => {
    axios({
      method: "DELETE",
      url: `/api/pizza/${pizza.id}`,
    })
      .then((response) => {
        fetchPizza();
      })
      .catch((error) => {
        console.log("error on delete: ", error);
      });
  };

  return (
    <div className="menuItem">
      <img className="picture" src={pizza.image_path} alt={pizza.name} />
      <p className="pizzaName">{pizza.name}</p>
      <p>{pizza.description}</p>
      <p className="pizzaPrice">{pizza.price}</p>
      <button onClick={deletePizza}>REMOVE</button>
    </div>
  );
}

export default PizzaListItem;
