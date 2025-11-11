import React, { useState } from "react";
import arrow from "./accessts/up-arrow.png";
import down from "./accessts/download.png";
import "./PayMoney.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PayMoney = () => {
  const [quantity, setQuantity] = useState(1);
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKENDURL;

  // 🧠 Safely parse product info
  const storedProduct = localStorage.getItem("productInfo");
  const productInfo = storedProduct ? JSON.parse(storedProduct) : null;
  const coffeeName = productInfo?.coffeeName || "Unknown";

  // 🏷️ Set price dynamically
  const prices = {
    "Black Coffee": 140,
    "Hot Coffee": 80,
    "Cold Coffee": 120,
  };
  const basePrice = prices[coffeeName] || 0;
  const totalAmount = basePrice * quantity;

  // ➕➖ Quantity Controls
  const incCount = () => {
    if (quantity < 5) setQuantity(quantity + 1);
    else alert("You can only order up to 5 Coffees at a time.");
  };

  const decCount = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // 🪙 Payment Info
  const paymentInfo = { coffeeName, quantity, totalAmount, pin };

  // 💳 Handle Payment
  const handleConfirmAndPay = async () => {
    if (pin.length !== 4) {
      alert("Please enter a valid 4-digit PIN.");
      return;
    }

    try {
      // const res = await axios.post(`${BACKEND_URL}/Coffee/order`, paymentInfo);
      const res = 201

      if (res.status === 201) {
        alert("Payment Successful! Thank you for your order.");
        localStorage.clear();

        // small delay for smooth redirect
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again later.");
    }
  };

  return (
    <div className="pay-container">
      <div className="pay-card">
        <h1 className="pay-title">Payment Summary</h1>

        {/* Coffee Name */}
        <div className="pay-row">
          <span className="pay-label">Item</span>
          <span className="pay-value">{coffeeName}</span>
        </div>

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
          <span className="pay-label">Total</span>
          <span className="pay-total">₹{totalAmount}</span>
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
