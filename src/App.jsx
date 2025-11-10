import { createContext, useState } from "react"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Copy from "./Project1/Copy";
import Buyer from "./Project1/Buyer";
import Payment from "./Project1/Payment";
import PayMoney from "./Project1/PayMoney";
import Pay1 from "./Project1/Pay1";
import Pay2 from "./Project1/Pay2";
import Pay3 from "./Project1/Pay3";
import Login from "./Project1/Login";
import Signup from "./Project1/Signup";
export const dataContext=createContext();//useContext creation


function App() {

// coffee starts
const router =createBrowserRouter(
  [
    { 
      path:"/",
      element:<Copy/>
    } 
    ,{
      path:"Buyer",
      element:<Buyer />
    }
    ,{
      path:"Login",
      element:<Login/>
    }
    ,{
      path:"Signup",
      element:<Signup/>
    },
    {
      path:"Payment",
      element:<Payment/>
    },
    {
      path:"Pay1",
      element:<Pay1/>
    },
     {
      path:"Pay2",
      element:<Pay2/>
    },
     {
      path:"Pay3",
      element:<Pay3/>
    },
    {
      path:"Pay",
      element:<PayMoney/>
    }
    
   
  ]
)
// coffee ends



  
  return (
    <>  
      <RouterProvider router={router} />  
    </>
  );
}

export default App;
