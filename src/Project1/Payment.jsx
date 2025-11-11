import React, { useState } from "react";
import "./Payment.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = ({ closeModal, coffeeName }) => {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKENDURL;

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    pin: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayment((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayNow = async () => {
    const { cardName, cardNumber, cvv, pin } = payment;

    if (!cardName || !cardNumber || !cvv || !pin) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    setError("");
    closeModal();

    try {
      const res = await axios.post(
        `${BACKEND_URL}/Coffee/details`,
        payment,
        { withCredentials: true }
      );

      if (res.status === 201) {
        localStorage.setItem(
          "productInfo",
          JSON.stringify({ coffeeName })
        );
        navigate("/Pay");
      }
    } catch (err) {
      console.error(err);
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="body12"
      initial={{ scale: 0.8, opacity: 0, y: -50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.8, opacity: 0, y: -50 }}
      transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
    >
      <div className="payment-container12">
        <h2 className="h212">Payment Gateway — {coffeeName}</h2>

        <form id="paymentForm" onSubmit={(e) => e.preventDefault()}>
          {["cardName", "cardNumber", "cvv", "pin"].map((field, idx) => (
            <div key={idx}>
              <label className="label12" htmlFor={field}>
                {field === "cardName"
                  ? "Cardholder Name"
                  : field === "cardNumber"
                  ? "Card Number"
                  : field.toUpperCase()}
              </label>
              <input
                className="input12"
                onChange={handleChange}
                type={field === "cardName" ? "text" : "password"}
                name={field}
                maxLength={field === "cardNumber" ? 16 : field === "pin" ? 4 : 3}
                required
              />
            </div>
          ))}

          {error && <p className="error-text">{error}</p>}

          <button
            className="button12"
            type="button"
            onClick={handlePayNow}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Payment;
