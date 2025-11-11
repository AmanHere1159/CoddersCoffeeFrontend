import "./Buyer.css";
import React, { useRef, useState } from "react";
import coffee1 from "./accessts/coffee1.png";
import coffee2 from "./accessts/coffee2.png";
import { motion, useInView } from "framer-motion";
import Payment from "./Payment";

const Buyer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState("");
  const ref = useRef(null);
  const view = useInView(ref);

  const handleOrderNow = (coffeeName) => {
    setSelectedCoffee(coffeeName);
    setShowModal(true);
  };

  return (
    <div className="herderq">
      <div className="lovecoffee">
        In love with <span className="span4">&nbsp;Coffee</span>
      </div>

      <div className="bodydiv3">
        {[
          { img: coffee1, name: "Black Coffee", price: 140 },
          { img: coffee2, name: "Hot Coffee", price: 80 },
          { img: coffee1, name: "Cold Coffee", price: 120 },
        ].map((coffee, index) => (
          <motion.div
            key={index}
            className="coffeebox"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={coffee.img} alt={coffee.name} className="imgbox1" />
            <div className="box1data1">{coffee.name}</div>
            <div className="box1data2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
            <div className="box1data3">₹{coffee.price}</div>

            <motion.div
              onClick={() => handleOrderNow(coffee.name)}
              className="buynowbtn cursor-pointer"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.3, type: "spring" }}
            >
              Order Now
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Render Payment Modal outside the cards */}
      {showModal && (
        <Payment
          closeModal={() => setShowModal(false)}
          coffeeName={selectedCoffee}
        />
      )}
    </div>
  );
};

export default Buyer;
