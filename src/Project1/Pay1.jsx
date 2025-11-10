import Payment from "./Payment";
import "./Pay1.css";
import coffee1 from "./accessts/coffee1.png";
import up from "./accessts/up-arrow.png";
import coffee2 from "./accessts/coffee2.png";
import React, { createContext, useRef, useState } from "react";
import { easeIn, easeInOut, motion, spring, useInView } from "framer-motion";

export const dataContext=createContext(); //creating useContext


const Pay1 = () => {
  const [sentValue, setSentValue] = useState(null);
     const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);
  const ref = useRef(null);
  const view = useInView(ref);
  let [data3, setdata3] = useState(0);
  // usestate -3
  function incCount() {
    if(data3<5){
        setdata3(data3 + 1);
    }
    else{
      alert("You can only order 5 Coffeee at a time")
    }
  
  }
  function decCount() {
    if (data3 >= 1) {
      setdata3(data3 - 1);
    }
  }
  return (
    <div className="body12">
      <motion.div
        className="coffeebox12"
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={coffee1} alt="can,t load it" className="imgbox112" />
        <div className="box1data112">Black Coffee</div>
        <div className="box1data212">
          lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>

        <motion.div
          className="buynowbtn12" 
          ref={ref}
          initial={{ x: 0, y: 100, type: "spring", opacity: 0 }}
          animate={{ x: 0, y: 0 }}
          whileInView={{ x: 0, y: 0, type: "spring", opacity: 1 }}
          transition={{ delay: 0.92, duration: 0.18, type: "spring" }}
        >
          {" "}
         
         
            <span className="textonly"> Quantity-{data3}</span>
          
            <button className="btn12" onClick={incCount}>
               <img className="imgbox32"
          src={up}
          alt="down"
          style={{ width: "26px", height: "26px" }}
        />
        {/* {open &&  <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            marginTop: "5px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "6px",
            listStyle: "none",
            padding: "8px 0",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <li
            style={{ padding: "8px 16px", cursor: "pointer" }}
            onClick={() => alert("Option 1 clicked")}
          >
            Option 1
          </li>
          <li
            style={{ padding: "8px 16px", cursor: "pointer" }}
            onClick={() => alert("Option 2 clicked")}
          >
            Option 2
          </li>
          <li
            style={{ padding: "8px 16px", cursor: "pointer" }}
            onClick={() => alert("Option 3 clicked")}
          >
            Option 3
          </li>
        </ul>} */}
            </button>
        </motion.div>
      </motion.div>
      <dataContext.Provider value={data3}>
        <Payment />
      </dataContext.Provider>
      
    </div>
  );
};

export default Pay1;
