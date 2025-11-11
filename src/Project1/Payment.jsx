import React, { useRef, useState } from "react";
import "./Payment.css";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = ({ closeModal, coffeeName }) => {
  const ref = useRef(null);
  const view = useInView(ref);
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKENDURL;

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    pin: "",
  });

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handlePayNow = async () => {
    const { cardName, cardNumber, cvv, pin } = payment;

    // 🛡️ Basic Validation
    if (!cardName || cardNumber.length !== 16 || cvv.length !== 3 || pin.length !== 4) {
      alert("Please enter valid payment details.");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/Coffee/details`, payment);
      if (res.status === 201) {
        localStorage.setItem("productInfo", JSON.stringify({ coffeeName }));

        // 🧭 Navigate first
        navigate("/Pay");

        // small delay to let route load smoothly
        setTimeout(() => closeModal(), 300);
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <motion.div
      className="body12"
      initial={{ scale: 0.8, opacity: 0, y: -50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: -50 }}
      transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
    >
      <div className="payment-container12" ref={ref}>
        <h2 className="h212">Payment Gateway - {coffeeName}</h2>
        <form id="paymentForm">
          <label className="label12">Cardholder Name</label>
          <input
            className="input12"
            onChange={handleChange}
            type="text"
            name="cardName"
            required
          />

          <label className="label12">Card Number</label>
          <input
            className="input12"
            onChange={handleChange}
            type="text"
            name="cardNumber"
            maxLength={16}
            required
          />

          <label className="label12">CVV</label>
          <input
            className="input12"
            onChange={handleChange}
            type="password"
            name="cvv"
            maxLength={3}
            required
          />

          <label className="label12">PIN</label>
          <input
            className="input12"
            onChange={handleChange}
            type="password"
            name="pin"
            maxLength={4}
            required
          />

          <button className="button12" type="button" onClick={handlePayNow}>
            Pay Now
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Payment;
