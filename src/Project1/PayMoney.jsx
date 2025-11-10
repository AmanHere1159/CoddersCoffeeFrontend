import React, { useRef, useState, useContext } from "react";
import arrow from "./accessts/up-arrow.png";
import down from "./accessts/download.png";
import "./PayMoney.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PayMoney = () => {
  const [quantity, setQuantity] = useState(1); // Initialize with 1
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const BACKEND_URL=import.meta.env.VITE_BACKENDURL

  
  const storedProduct = localStorage.getItem("productInfo");
  const productInfo = JSON.parse(storedProduct);
  const coffeeName = productInfo.coffeeName
  console.log(coffeeName)
  console.log(storedProduct)
  let totalAmount = 0;

  if (coffeeName == "Black Coffee") totalAmount = 140;
  else if (coffeeName == "Hot Coffee") totalAmount = 80;
  else totalAmount = 120;

  function incCount() {
    if (quantity < 5) setQuantity(quantity + 1);
    else alert("You can only order up to 5 Coffees at a time.");
  }
  function decCount() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  const paymentInfo = {
    coffeeName,
    quantity,
    totalAmount,
    pin,
  };

  const handleConfirmAndPay = async () => {
    
    if (pin.length !== 4) {
      alert("Please enter a valid 4-digit PIN.");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/Coffee/order`,paymentInfo);

      if (res.status === 201) {
    alert("Payment Successful! Thank you for your order.");
        localStorage.clear();
        setTimeout(() => {
            navigate("/");
        }, 3000);

    
      
      }
    } catch (error) {
      console.error(error);
      if (error.status == 409) {
        alert("user already exists");
      }
      // alert("Payment failed. Please try again.",error);
    }

    // console.log(payload)
  };

  // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  return (
    <div className="pay-container">
      <div className="pay-card">
        <h1 className="pay-title">Payment Summary</h1>

        {/* Quantity */}
        <div className="pay-row">
          <span className="pay-label">Quantity</span>

          <div className="quantity-control">
            <img
              src={down}
              alt="Decrease"
              className="arrowpic dec"
              onClick={decCount}
            />

            <span className="pay-value">{quantity}</span>

            <img
              src={arrow}
              alt="Increase"
              className="arrowpic inc"
              onClick={incCount}
            />
          </div>
        </div>

        {/* Total */}
        <div className="pay-row">
          <span className="pay-label">Total totalAmount</span>
          <span className="pay-total">₹{totalAmount * quantity}</span>
        </div>

        {/* PIN */}
        <div className="pay-input">
          <label className="pay-label">Enter PIN</label>
          <input
            type="password"
            maxLength="4"
            placeholder="****"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="pay-pin"
          />
        </div>

        <button className="pay-btn" onClick={handleConfirmAndPay}>
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default PayMoney;
