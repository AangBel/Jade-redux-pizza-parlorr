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
      <img 
      className="picture"
      src={pizza.image_path}
      alt = {pizza.name}
      />  
      <td className="pizzaName">{pizza.name}</td>
      <td>{pizza.description}</td>
      <td>{pizza.price}</td>   
      <td>
        <button onClick={deletePizza}>REMOVE</button>
      </td>

  
    </div>
  );
}

export default PizzaListItem;
