import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Anything from './Anything.jsx'
import Buyer from './Project1/Buyer.jsx'
import Copy from './Project1/Copy.jsx'
import Signup from './Project1/Signup.jsx'
import Login from './Project1/Login.jsx'
import Payment from './Project1/Payment.jsx'
import PayMoney from './Project1/PayMoney.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Login/> */}
    {/* <Signup/> */}
    {/* <Copy/> */}
    <App />
    {/* <Anything/> */}
    {/* <Buyer/> */}
    {/* <Payment/> */}
    {/* <PayMoney/> */}
  </StrictMode>,
)
