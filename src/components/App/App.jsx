import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import PizzaList from "../PizzaList/PizzaList";
// import PizzaListItem from "../PizzaListItem/PizzaListItem";
// import Checkout from "../CheckOut/CheckOut";
import Header from "../Header/Header";

// import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import CustomerForm from "../CustomerInfo/CustomerInfo";



function App() {
  const dispatch = useDispatch();
  // TODO use added to order and set added to order
  // const {description, id, image_path, name, price} = menuItem;

  const [addedToOrder, setAddedToOrder] = useState(false);

  const pizzaList = useSelector((store) => store.pizzaReducer);
  // const orderList = useSelector((store) => store.pizzasInCart);
  // console.log(pizzaList);

  useEffect(() => {
    console.log("in useEffect");
    fetchPizza();
  }, []);

  const fetchPizza = () =>{
    axios.get('/api/pizza')
    .then((response)=>{
      console.log('this is the response.data', response.data);
      dispatch({type:'GET_PIZZA', payload: response.data })
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  


  return (
<>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
      <h2>🛒 Total:</h2>
    </div>
    
    <div>
      <p>Pizza is great.</p>
      <PizzaList fetchPizza={fetchPizza} />
    </div>
    
    <div>
      <button>Next</button>
    </div>
    </>
  );
}

export default App;



// <Router>
//     <div className='App'>
//       <Header />
//       <Route exact path="/">
//         <PizzaList />
//       </Route>
//       <Route exact path="/form">
//         <CustomerForm />
//       </Route>
//       <Route exact path="/checkout">
//         <Checkout />
//       </Route>
//       <Route exact path='/admin'>
//         <Admin />
//       </Route>
//     </div>
//   </Router>
