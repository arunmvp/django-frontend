import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import SignupForm from '../Pages/SignupForm';
import LoginForm from '../Pages/LoginForm';
import NewsletterFooter from '../Components/Footer/NewsletterFooter';

const Router = () => {
  return (
    <BrowserRouter>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>
        </Routes>
        <NewsletterFooter/>
        <Footer/>
    </BrowserRouter>
      
  )
}

export default Router