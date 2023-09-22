//MENU ITEM

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import App from "../App/App";

// TODO- do both a delete and add button due to possible next steps if i get to the stretch goals
function PizzaListItem({ fetchPizza, pizza, menuItem }) {
  const [addedToOrder, setAddedToOrder] = useState(
    useSelector((store) =>
      store.orderList.some((item) => item.name === pizza.name)
    )
  );
  const orderList = useSelector((store) => store.orderList);
  const initialAddedToOrder = orderList.some(
    (item) => item.name === pizza.name
  );

  const dispatch = useDispatch();
  const { description, id, image_path, name, price } = pizza;

  function buttonClicked(addedToOrder) {
    if (addedToOrder) {
      console.log("in button clicked");
      setAddedToOrder(!addedToOrder);
    } else {
      dispatch({
        type: "GET_ORDER",
        payload: [
          ...orderList,
          {
            name: pizza.name,
            price: pizza.price,
          },
        ],
      });
      setAddedToOrder(!addedToOrder);
      console.log("this is the order list", orderList);
    }
  }

  return (
    <>
      <div className="menuItem">
        <img className="picture" src={pizza.image_path} alt={pizza.name} />
        <p className="pizzaName">{pizza.name}</p>
        <p>{pizza.description}</p>
        <p className="pizzaPrice">{pizza.price}</p>

        <p>
          {addedToOrder ? (
            <button
              className="AddRemove-button"
              onClick={() => buttonClicked(addedToOrder)}
            >
              Remove
            </button>
          ) : (
            <button
              className="AddRemove-button"
              onClick={() => buttonClicked(addedToOrder)}
            >
              Add
            </button>
          )}
        </p>
      </div>
    </>
  );
}

export default PizzaListItem;
