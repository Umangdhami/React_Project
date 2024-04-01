import React, {useEffect} from "react";
import Home from './Container/Home/Home.jsx';
import Product from "./Container/Product/Product.jsx";
import Header from "./Components/Header/Header.jsx";
import './App.css'
import Footer from "./Components/Footer/Footer.jsx";
import { Route, Routes } from "react-router";
import FooterNav from "./Components/FooterNav/FooterNav.jsx";
import Signup from "./Container/SignUp/Signup.jsx";
import Login from "./Container/Login/Login.jsx";
import ForgotPass from "./Container/ForgotPass/ForgotPass.jsx";
import OTP from "./Container/OTP/OTP.jsx";
import ResetPass from "./Container/ResetPass/ResetPass.jsx";

function App() {

    useEffect(async() => {
      await fetch('http://localhost:5011/login').then((res) => res.json()).then((data) => console.log(data))
    }, [])
    

  return (
    <>
    <Header/>
    <FooterNav/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/sign-in' element={<Login/>} />
          <Route path='/forgot-pass' element={<ForgotPass/>} />
          <Route path='/otp' element={<OTP/>} />
          <Route path='/reset-pass' element={<ResetPass/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
