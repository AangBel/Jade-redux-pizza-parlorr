//MENU ITEM

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import App from "../App/App";

// TODO- do both a delete and add button due to possible next steps if i get to the stretch goals 
function PizzaListItem({ fetchPizza, pizza,  menuItem}) {

  const [addedToOrder, setAddedToOrder] = useState(false);
  const orderList = useSelector((store) => store.orderList);
  const dispatch = useDispatch();
  const {description, id, image_path, name, price} = pizza;

  // console.log('this is pizza', pizza);
  // console.log('this is remove pizza from order', removePizzaFromOrder);

  // const removePizzaFromOrder = (state = [], action) => {
  //   if (action.type === `REMOVE_PIZZA`) {
  //     // this will replace the book list, payload is array of all books
  //     console.log('this is action.payload', action.payload);
  //     return  action.payload 
  //   }
  //   return state;
  // }


    function buttonClicked(addedToOrder){
      if(addedToOrder){
        console.log('in button clicked' );
        setAddedToOrder(!addedToOrder);
      }else {
        dispatch({
          type: "GET_ORDER",
          payload: [
            ...orderList,
            {
              name: pizza.name,
              description: pizza.description, 
              price:pizza.price,
              image_path:pizza.image_path,
              quantity: 1, 
              id: pizza.id
            },
          ],
        });
        setAddedToOrder(!addedToOrder);
        console.log('this is the order list', orderList);
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
  