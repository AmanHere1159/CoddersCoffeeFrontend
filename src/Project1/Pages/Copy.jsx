import React, { useRef } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar11";
import { easeIn, easeInOut, motion, spring, useInView } from "framer-motion";

import coffee1 from "./accessts/coffee1.png";
import coffee2 from "./accessts/coffee2.png";
import map from "./accessts/world-map.png";
import apple from "./accessts/applestore.png";
import play from "./accessts/google-play.webp";
import visa from "./accessts/visa.png";
import mastercard from "./accessts/mastercard.png";
import paypal from "./accessts/Paypal.png";
import discover from "./accessts/discover.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

import Navbar11 from "../Navbar11";
import { NavLink } from "react-router-dom";
import Buyer from "./Buyer";

const Copy = () => {
  const ref = useRef(null);
  const view = useInView(ref);
  const navigate = useNavigate();
  const formRef = useRef(null);
  document.title = "Buy-a-Drink";
  const handleClick = (e) => {
    e.preventDefault();

    const form = formRef.current;

  };
  return (
    <div className="page">
      {/* head starts */}
      <div className="head">
        <Navbar11 />
        <div className="usingdiv"></div>

        <div className="upperdata">
          <motion.h1
            className="him1"
            ref={ref}
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 10, opacity: 1 }}
            transition={{
              delay: 0.42,
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
            }}
            whileInView={{ scale: 1.05 }} // Example animation when in view
          >
            Black <br />
            Tumbler
          </motion.h1>

          <motion.div
            className="him2"
            ref={ref}
            initial={{ x: 0, y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{
              delay: 0.11,
              duration: 0.22,
              type: "spring",
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
        <motion.div
          className="boxi1"
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // start hidden, pushed down
          whileInView={{ y: 0, opacity: 1 }} // animate in when visible
          transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
        ></motion.div>
        {/* contentbox1 */}
        <motion.div
          className="contentbox1"
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Start hidden & pushed down
          whileInView={{ y: 0, opacity: 1 }} // Animate into view
          transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
          viewport={{ once: true }} // Run only once
        >
          <span className="span1">Black Lifestyle Lovers,</span>
          <p className="p1">
            Lorem ipsum dolor sit, amet consectetur adipisicing <br />
            elit. Delectus aspernatur, cumque eos neque dolorem <br />
            architecto deserunt quis voluptatibus in quisquam <br />
            quia ducimus
          </p>
        </motion.div>

        {/* Coffee  mug */}
        <motion.div
          className="mug"
          ref={ref}
          initial={{ scale: -0.3, opacity: 0 }}
          animate={{ scale: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.02, duration: 1 }}
        ></motion.div>

        <motion.div
          className="boxi2"
          ref={ref}
          initial={{ x: 0, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
        ></motion.div>

        {/* contentbox2 */}
        <motion.div
          className="contentbox2"
          ref={ref}
          initial={{ x: 0, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
        >
          <span className="span2">Blavk Tumbler</span>
          <p className="p2">
            Lorem ipsum dolor sit, amet consectetur adipisicing <br />
            elit. Delectus aspernatur,Delectus aspernatur, <br /> Delectus
            aspernatur,Delectus aspernatur
          </p>
        </motion.div>
      </div>
      {/* head ends */}
      <div className="body">
        <motion.div
          className="bodydiv1"
          ref={ref}
          initial={{ y: 100, opacity: 0 }} // Start hidden below
          whileInView={{ y: 0, opacity: 1 }} // Animate into place
          transition={{ delay: 0.12, duration: 0.6, type: "spring" }}
          viewport={{ once: true }} // Run only once
        >
          <span className="span3">Fresh and </span>
          <span className="span4">Tasty coffee</span>
        </motion.div>
        <motion.div
          className="bodydiv2"
          ref={ref}
          initial={{ x: 0, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.32, duration: 0.28, type: "spring" }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit eum
          <br /> ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.
        </motion.div>
        {/* bodydiv-3 */}
        <div className="bodydiv3">
          <motion.div
            className="coffeebox"
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={coffee1} alt="can,t load it" className="imgbox1" />
            <div className="box1data1">Black Coffee</div>
            <div className="box1data2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
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
          </motion.div>
        </div>
        {/* body div4 */}
        <div className="bodydiv4">
          <div className="box2data1">
            <motion.div
              className="data1div1"
              ref={ref}
              initial={{ x: 0, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.18 }}
            >
              Buy our <br /> products from <br /> anywhere
            </motion.div>
            <div className="form-groupc">
              <form ref={formRef} id="orderForm">
                <motion.div
                  className="data1div2"
                  ref={ref}
                  initial={{ x: 0, y: 100, opacity: 0 }}
                  animate={{ x: 0, y: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.52, duration: 0.18, type: "spring" }}
                >  <NavLink className="noni" to="/Signup">
                   <motion.button
                    className="login"
                    ref={ref}
                    initial={{ x: 0, y: 100, opacity: 0 }}
                    animate={{ x: 0, y: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ delay: 0.32, duration: 0.18 }}
                    
                  >
                SignUp
                  </motion.button>
                  </NavLink>   
                  <NavLink className="noni" to="/Login">
                  <motion.button
                    className="login"
                    ref={ref}
                    initial={{ x: 0, y: 100, opacity: 0 }}
                    animate={{ x: 0, y: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ delay: 0.32, duration: 0.18 }}
                  >
                   Login
                  </motion.button>
                  </NavLink>
                  
                  {/* <input
                    type="text"
                    name="name"
                    className="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="E-mail"
                    required
                  /> */}
                </motion.div>
                <motion.div
                  className="data1div3"
                  ref={ref}
                  initial={{ x: 0, y: 100, opacity: 0 }}
                  animate={{ x: 0, y: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.72, duration: 0.18, type: "spring" }}
                >
                  {/* <input
                    type="text"
                    name="country"
                    className="country"
                    placeholder="Country"
                  />
                  <input
                    type="number"
                    name="zipcode"
                    className="zipcode"
                    placeholder="Zipcode"
                  /> */}
                </motion.div>
                {/* <motion.button
                  className="data1div4"
                  type="submit"
                  ref={ref}
                  // onClick={handleClick}
                  initial={{ x: 0, y: 100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.92, duration: 0.18, type: "spring" }}
                >
                  order now
                </motion.button> */}
              </form>
            </div>
          </div>
          <motion.div
            className="box2data2"
            ref={ref}
            initial={{ scale: -0.3, opacity: 0 }}
            // animate={{ scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.78 }}
          >
            <img src={map} alt="can,t load it" className="imgbox2" />
          </motion.div>
        </div>
        {/* body div 5 */}
        <div className="bodydiv5">
          <motion.div
            className="bottom-left"
            ref={ref}
            initial={{ x: 0, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.18 }}
          >
            Download the app
          </motion.div>
          <motion.div
            className="bottom-right"
            ref={ref}
            initial={{ x: 0, y: 100, opacity: 0 }}
            animate={{ x: 0, y: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.18, type: "spring" }}
          >
            Lorem ipsum dolor sit amet consedolor sit amet <br /> consectetur
            adipisicing elit. Officiis
          </motion.div>
          <div className="pics">
            <motion.img
              src={apple}
              alt="can,t load it"
              className="div5pic1"
              ref={ref}
              initial={{ x: 0, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.72, duration: 0.18, type: "spring" }}
            />
            <motion.img
              src={play}
              alt="can,t load it"
              className="div5pic2"
              ref={ref}
              initial={{ x: 0, y: 100, opacity: 0 }}
              animate={{ x: 0, y: 0 }}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 0.72, duration: 0.18, type: "spring" }}
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerdiv">
          <div className="footerdata1">Coders Cafe</div>
          <div className="footerdata2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
            ratione quidem libero, praesentium ab atque? Quidem maxime, numquam
            dolores
          </div>
          <div className="footerdata3">
            <FaPhoneAlt /> +1 (123) 456-7890
          </div>
          <div className="footerdata3">
            <FaMapLocation /> Noida, Uttar Pradesh
          </div>
        </div>
        <div className="footerdiv2">
          <div className="footerdata11">Quick links</div>
          <div className="footerdata5">
            Home
            <div className="footerdata5">Home</div>
          </div>
          <div className="footerdata6">
            About
            <div className="footerdata6">About</div>
          </div>
          <div className="footerdata7">
            Contact Us
            <div className="footerdata7">Contact Us</div>
          </div>
          <div className="footerdata8">
            Privacy Policy
            <div className="footerdata8">Privacy Policy</div>
          </div>
        </div>
        <div className="footerdiv">
          <div className="footerdata12">Follow Us</div>
          <div className="followicons">
            <FaFacebook className="i" />
            <FaInstagram className="i" />
            <FaTelegram className="i" />
            <FaGoogle className="i" />
          </div>
          <div className="footerdata9">Payment Methods</div>
          <div className="imagespayment">
            <img src={visa} alt="" className="payimg" />
            <img src={mastercard} alt="" className="payimg" />
            <img src={paypal} alt="" className="payimg" />
            <img src={discover} alt="" className="payimg" />
          </div>
        </div>
      </div>
      <div className="enddata">
        <div className="line"></div>
        <div className="lastdata">
          Copyright © 2024 Company Name. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Copy;
