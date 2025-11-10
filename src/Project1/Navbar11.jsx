import React from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Navbar11 = () => {
  return (
    <div className="bari">
      <motion.div
        className="what"
        animate={{ x: 0, y: [-100, 0] }}
        transition={{ type: "spring", delay: 0.0004, duration: 0.0004 }}
      >
        <motion.span
          className="her1"
          initial={{ x: 0, y: -75 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.54, duration: 0.44, type: "spring" }}
        >
          Coders
        </motion.span>

        <motion.span
          className="her2"
          initial={{ x: 0, y: -75 }}
          animate={{ x: 0, y: 0}}
          transition={{ delay: 0.54, duration: 0.44, type: "spring" }}
        >
          coffee.
        </motion.span>
      </motion.div>
      <motion.div
        className="him3"
        initial={{ x: -90, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.54, duration: 0.44, type: "spring" }}
      >
        Blavk Tumbler
      </motion.div>
      <motion.div
        initial={{ x: 0, y: -75 }}
        animate={{ x: 0, y: 0 }}
        transition={{ delay: 0.54, duration: 0.44, type: "spring" }}
      >
        <GiHamburgerMenu
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: "1.5rem",
            marginRight: "70px",
            marginTop: "40px",
          }}
        />
      </motion.div>
    </div>
    
  );
};

export default Navbar11;

  // <div className="head">
  //       {/* <Navbar11 /> */}
  //       <div className="usingdiv"></div>

  //       <div className="upperdata">
  //         <motion.h1
  //           className="him1"
  //           ref={ref}
  //           animate={{ x: 0, y: [-120, 0] }}
  //           transition={{
  //             delay: 0.42,
  //             duration: 0.11,
  //             ease: easeIn,
  //             type: "spring",
  //           }}
  //           whileInView={{ ref }}
  //         >
  //           Blavk <br />
  //           Tumbler
  //         </motion.h1>
  //         <motion.div
  //           className="him2"
  //           ref={ref}
  //           initial={{ x: 0, y: 100 }}
  //           animate={{ x: 0, y: 0 }}
  //           transition={{
  //             delay: 0.11,
  //             duration: 0.22,
  //             type: "spring",
  //             ease: easeInOut,
  //           }}
  //         ></motion.div>
  //       </div>

  //       <motion.div
  //         className="boxi1"
  //         ref={ref}
  //         initial={{ x: 0, y: 100, opacity: 0 }}
  //         animate={{ x: 0, y: 0 }}
  //         // whileInView={{ opacity: 1 }}
  //         transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
  //       ></motion.div>
  //       {/* contentbox1 */}
  //       <motion.div
  //         className="contentbox1"
  //         ref={ref}
  //         initial={{ x: 0, y: 100, opacity: 0 }}
  //         animate={{ x: 0, y: 0 }}
  //         whileInView={{ opacity: 1 }}
  //         transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
  //       >
  //         <span className="span1">Black Lifestyle Lovers,</span>
  //         <p className="p1">
  //           Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit.
  //           Delectus aspernatur, cumque eos neque dolorem <br /> architecto
  //           deserunt quis voluptatibus in quisquam <br /> quia ducimus
  //         </p>
  //       </motion.div>
  //       {/* Coffee  mug */}
  //       <motion.div
  //         className="mug"
  //         ref={ref}
  //         initial={{ scale: -0.3, opacity: 0 }}
  //         animate={{ scale: 1 }}
  //         whileInView={{ opacity: 1 }}
  //         transition={{ delay: 0.02, duration: 1 }}
  //       ></motion.div>

  //       {/* contentbox2 */}
  //       <motion.div
  //         className="boxi2"
  //         ref={ref}
  //         initial={{ x: 0, y: 100, opacity: 0 }}
  //         animate={{ x: 0, y: 0 }}
  //         whileInView={{ opacity: 1, x: 0, y: 0 }}
  //         transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
  //       ></motion.div>
  //       <motion.div
  //         className="contentbox2"
  //         ref={ref}
  //         initial={{ x: 0, y: 100, opacity: 0 }}
  //         animate={{ x: 0, y: 0 }}
  //         whileInView={{ opacity: 1 }}
  //         transition={{ delay: 0.02, duration: 0.98, type: "spring" }}
  //       >
  //         <span className="span2">Blavk Tumbler</span>
  //         <p className="p2">
  //           Lorem ipsum dolor sit, amet consectetur adipisicing <br />
  //           elit. Delectus aspernatur,Delectus aspernatur, <br /> Delectus
  //           aspernatur,Delectus aspernatur
  //         </p>
  //       </motion.div>
  //     </div>