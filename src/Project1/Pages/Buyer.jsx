import "./Buyer.css";
import React, { useRef, useState } from "react";
// import coffee1 from "../accessts/coffee1.png";
import coffee1 from "./accessts/coffee1.png";
import coffee2 from "./accessts/coffee2.png";
import { easeIn, easeInOut, motion, spring, useInView } from "framer-motion";
import Payment from "./Payment";
const Buyer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState("");
  let [data1, setdata] = useState(0);
  const handleOrderNow = (coffeeName) => {
    setSelectedCoffee(coffeeName);
    setShowModal(true);
  };
  const ref = useRef(null);
  const view = useInView(ref);
  function incCount() {
    setdata(data1 + 1);
  }
  function decCount() {
    if (data1 >= 1) {
      setdata(data1 - 1);
    }
  }

  return (
    <div className="herderq">
      <div className="lovecoffee">
        In love with <span className="span4"> &nbsp;Coffee</span>
      </div>
      <div className="bodydiv3">
        <motion.div
          className="coffeebox"
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={coffee1} alt="can’t load it" className="imgbox1" />
          <div className="box1data1">Black Coffee</div>
          <div className="box1data2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
           <div className="box1data3"> ₹140</div>
         
            <motion.div
              onClick={() => handleOrderNow("Black Coffee")}
              className="buynowbtn cursor-pointer"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.3, type: "spring" }}
            >
              Order Now
            </motion.div>
      
          {/* Modal should be rendered outside */}
          {showModal && (
            <Payment
              closeModal={() => setShowModal(false)}
              coffeeName={selectedCoffee}
            />
          )}
        </motion.div>

        <motion.div
          className="coffeebox"
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={coffee2} alt="can,t load it" className="imgbox1" />
          <div className="box1data1">Hot Coffee</div>
          <div className="box1data2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
         <div className="box1data3"> ₹80</div>
            <motion.div
              className="buynowbtn"  onClick={() => handleOrderNow("Hot Coffee")}
              ref={ref}
              initial={{ x: 0, y: 100, type: "spring", opacity: 0 }}
              animate={{ x: 0, y: 0 }}
              whileInView={{ x: 0, y: 0, type: "spring", opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.18, type: "spring" }}
            >
              {" "}
              Order Now
            </motion.div>
          
          {/* <div className="kuchbhi">
            <button className="btn12" onClick={incCount}>+</button>
            <span>{data2}</span>
            <button className="btn12" onClick={decCount}>-</button>
          </div> */}
        </motion.div>
        <motion.div
          className="coffeebox"
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={coffee1} alt="can,t load it" className="imgbox1" />
          <div className="box1data1">Cold Coffee</div>
          <div className="box1data2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>

           <div className="box1data3"> ₹120</div>
            <motion.div
              className="buynowbtn"  onClick={() => handleOrderNow("Cold Coffee")}
              ref={ref}
              initial={{ x: 0, y: 100, type: "spring", opacity: 0 }}
              animate={{ x: 0, y: 0 }}
              whileInView={{ x: 0, y: 0, type: "spring", opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.18, type: "spring" }}
            >
              {" "}
              Order Now
            </motion.div>
  
        </motion.div>
      </div>
    </div>
  );
};

export default Buyer;
