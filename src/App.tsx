import React, {useEffect, useState} from 'react';
import WebHead from './component/webHead';
import MobileHead from "./component/mobileHead";
import Foot from './component/Foot';
import HomePage from './component/homePage';
import AccountPage from './component/accountPage';
import ShoppingCartPage from './component/shoppingCartPage';
import OrderPage from './component/orderPage';
import Help from './component/Help';
import ProductPage from "./component/productPage";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import {useMediaQuery, useTheme} from "@mui/material";
import {ProductContext} from "./context/context";




function App() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch('http://localhost:8080/products');
            const json = await response.json();
            const res = json.filter((item: { id: number; }) => {return item.id !== 1})
            setProduct(res);
        }
        fetchProduct()
    },[])


    if(matches) {
        return (
            <div className="App">
                <BrowserRouter>
                    <WebHead />
                    <ProductContext.Provider value={product}>
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>
                            <Route path="/shoppingcartPage" element={<ShoppingCartPage />}></Route>
                            <Route path="/help" element={<Help />}></Route>
                            <Route path="/accountPage" element={<AccountPage />}></Route>
                            <Route path="/orderPage" element={<OrderPage />}></Route>
                            <Route path="/product/:id" element={<ProductPage/>}></Route>
                        </Routes>
                    </ProductContext.Provider>
                    <Foot />
                </BrowserRouter>
            </div>
        );
    }

    else {
        return (
            <div className="App">
                <BrowserRouter>
                    <MobileHead />
                    <ProductContext.Provider value={product}>
                        <Routes>
                            <Route path="/" element={<HomePage />}></Route>
                                <Route path="shoppingcartPage" element={<ShoppingCartPage />}></Route>
                                <Route path="help" element={<Help />}></Route>
                                <Route path="accountPage" element={<AccountPage />}></Route>
                                <Route path="orderPage" element={<OrderPage />}></Route>
                                <Route path="product/:id" element={<ProductPage/>}></Route>
                        </Routes>
                    </ProductContext.Provider>
                    <Foot />
                </BrowserRouter>
            </div>
        )
    }
}

export default App;

