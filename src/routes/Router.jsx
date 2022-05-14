import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Error from '../pages/Error';
//Redux
import { useSelector } from "react-redux";
import Login from '../pages/Login';
import ProductDetail from '../pages/ProductDetail';
import CheckoutInfo from '../pages/CheckoutInfo';
import CheckoutCart from '../pages/CheckoutCart';
import ProtectedPages from './ProtectedPages';


const Router = () => {

    const { isLogged } = useSelector(state => state.login);
    console.log(isLogged);
    return (
        <BrowserRouter>
            <Routes>
                {/*Rutas Publicas*/}
                <Route path='/login' element={<Login />} />
                <Route path='/signup' />
                {/*Rutas Privadas*/}
                <Route element={<ProtectedPages />} >
                    <Route path='/' element={<App />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                    <Route path='/cart/success' element={<h1>Gracias por tu compra</h1>} />
                    <Route path='/cart/info' element={<CheckoutInfo />} />
                    <Route path='/cart' element={<CheckoutCart />} />
                </Route>
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router