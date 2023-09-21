import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import PizzaList from "../PizzaList/PizzaList";

function App() {
  const dispatch = useDispatch();
  // TODO use added to order and set added to order 
  // const {description, id, image_path, name, price} = menuItem;

  const [addedToOrder, setAddedToOrder]= useState(false);

  const pizzaList = useSelector((store) => store.pizzaReducer);
  // console.log(pizzaList);


  // get Pizza data from server on load
  useEffect(() => {
    console.log("in useEffect");
    fetchPizza();
  }, []);

  const fetchPizza = () => {
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        // response.data is the array of artists
        console.log('this is response.data:', response.data);
        // TODO - update this to dispatch to Redux
        dispatch({
          type: "GET_PIZZA",
          payload: response.data,
          // payload: menuItem
        });
      })
      .catch((error) => {
        console.log("error on GET", error);
      });
  };

  const removePizzaFromOrder = () => {
  
    setAddedToOrder(!addedToOrder);

    dispatch({
      type: "REMOVE_PIZZA",
    // <payload:id></payload:id>
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      
      <p>Pizza is great.</p>
      <PizzaList fetchPizza={fetchPizza} />
    </div>
  );
}

export default App;
