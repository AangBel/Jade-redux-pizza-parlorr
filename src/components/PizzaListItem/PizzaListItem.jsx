//MENU ITEM

import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import App from "../App/App";

// TODO- do both a delete and add button due to possible next steps if i get to the stretch goals 
function PizzaListItem({ fetchPizza, pizza,  menuItem}) {

  const [addedToOrder, setAddedToOrder] = useState(
      useSelector((store) => 
      store.orderList.some((item) => item.name === pizza.name)
      )
    );
  const orderList = useSelector((store) => store.orderList);
  const initialAddedToOrder = orderList.some((item) => item.name === pizza.name);


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


    // function buttonClicked(addedToOrder){
    //   if(addedToOrder){
    //     console.log('in button clicked' );
    //     setAddedToOrder(!addedToOrder);
    //   }else {
    //     dispatch({
    //       type: "GET_ORDER",
    //       payload: pizza

    //     });
    //     setAddedToOrder(!addedToOrder);
    //     console.log('this is the order list', orderList);
    //   }
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
                    name:pizza.name,
                    price: pizza.price

                  },
                ],
        });
        setAddedToOrder(!addedToOrder);
        console.log('this is the order list', orderList);
      }
    }

    // function buttonClicked() {
    //   const isPizzaInOrder = orderList.some((item) => item.name === pizza.name);
    //   if (!isPizzaInOrder) {
    //     dispatch({
    //       type: "REMOVE_PIZZA",
    //       payload:pizza.name,
    //     });
    //   }else{
    //     dispatch({
    //       type: "GET_ORDER",
    //       payload: {
    //         name: pizza.name,
    //         quantity: 1,
    //         price: pizza.price,
    //       },
    //     });
    //   }
    //   console.log('this is the orderlist', orderList);
    //   // Toggle the addedToOrder state
    //   setAddedToOrder(!addedToOrder);
    // }
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
  