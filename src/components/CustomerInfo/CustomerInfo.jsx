import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function CustomerForm() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [type, setType] = useState("Pickup")
    const history = useHistory()

    const dispatch = useDispatch();

    const handlePickup = () => {
        setType("Pickup")
    };

    const handleDelivery = () => {
        setType("Delivery")
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push('/checkout')
        
        dispatch({type: "GET_FORM", payload: {name, address, city, zipCode, type}})
        
        setName("");
        setAddress("");
        setCity("");
        setZipCode("");
        setType("Pickup")
    };


    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
            <br></br><br></br>
            <input placeholder="Street Address" type="text" value={address} onChange={(event) => setAddress(event.target.value)}></input>
            <br></br><br></br>
            <input placeholder="City" type="text" value={city} onChange={(event) => setCity(event.target.value)}></input>
            <br></br><br></br>
            <input placeholder="Zip Code" type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)}></input>
            <br></br><br></br>
            
            <div>
                <input type="radio" value={type === "Pickup"} onChange={handlePickup} name="Type"></input>
                <label htmlFor="pickup-btn">PICKUP</label>
                <input type="radio" value={type === "Delivery"} onChange={handleDelivery} name="Type"></input>
                <label htmlFor="delivery-btn">DELIVERY</label>
            </div>

            <br></br><br></br>
            <button type="submit">Next</button>
        </form>
        </>
    )

};

export default CustomerForm;
