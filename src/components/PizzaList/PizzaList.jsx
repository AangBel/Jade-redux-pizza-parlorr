import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function PizzaList({ fetchPizza }) {
// const history = useHistory();
const pizzaList = useSelector((store) => store.pizzaReducer);
// console.log('smokie', pizzaList)
  // function handleSubmit() {
  //   history.push('/form')
  // }

  return (
    <>
    
    <div>
          {pizzaList.map((pizza) => {
            return (
              <PizzaListItem
                key={pizza.id}
                fetchPizza={fetchPizza}
                pizza = {pizza}
              />
            );
          })}
        {/* <button className="NextPizzaList" onClick={handleSubmit}> */}
      
    </div>
    </>
  );
}

export default PizzaList;

