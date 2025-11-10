import React, { useRef, useState, useContext } from "react";
import "./Payment.css";
import coffee1 from "./accessts/coffee1.png";
import coffee2 from "./accessts/coffee2.png";
import { easeIn, easeInOut, motion, spring, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { dataContext } from "./Pay1";
import axios from "axios";

const Payment = ({ closeModal, coffeeName }) => {
  const ref = useRef(null);
  const view = useInView(ref);
  const navigate = useNavigate();
    const BACKEND_URL=import.meta.env.VITE_BACKENDURL


  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    pin: "",
  });

  const productInfo = {
    coffeeName,
  };

  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handlePayNow = async () => {
  
    try {
      const datareturn = await axios.post(`${BACKEND_URL}/Coffee/details`,payment
      );
      console.log(datareturn.status);
      if (datareturn.status === 201) {
        localStorage.setItem("productInfo", JSON.stringify(productInfo));
        navigate("/Pay");
          closeModal(); // close popup
      }

      // navigate and send data
    } catch (error) {}
  };

  return (
    <motion.div
      className="body12"
      initial={{ scale: 0.8, opacity: 0, y: -50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: -50 }}
      transition={{ delay: 0.75, duration: 0.3, ease: "easeOut" }}
    >
      <div className="payment-container12">
        <h2 className="h212">Payment Gateway {coffeeName}</h2>
        <form id="paymentForm">
          <label className="label12" htmlFor="cardName">
            Cardholder Name
          </label>
          <input
            className="input12"
            onChange={handleChange}
            type="text"
            name="cardName"
            required
          ></input>

          <label className="label12" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="input12"
            onChange={handleChange}
            type="text"
            name="cardNumber"
            maxLength={16}
            required
          ></input>

          <label className="label12" htmlFor="cvv">
            CVV
          </label>
          <input
            className="input12"
            onChange={handleChange}
            type="password"
            name="cvv"
            maxLength={3}
            required
          ></input>
          <label className="label12" htmlFor="cvv">
            PIN
          </label>
          <input
            className="input12"
            onChange={handleChange}
            type="password"
            name="pin"
            maxLength={4}
            required
          ></input>

          {/* <div>{data}</div> */}
          <button className="button12 " type="button" onClick={handlePayNow}>
            Pay Now
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Payment;
