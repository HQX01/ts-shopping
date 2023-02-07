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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import {useMediaQuery, useTheme} from "@mui/material";
import {ProductContext} from "./context/context";



function App() {
    console.log('a')

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
                    <Switch>
                            <ProductContext.Provider value={product}>
                                <Route exact path="/accountPage" component={AccountPage}/>
                                <Route exact path="/shoppingCartPage" component={ShoppingCartPage}/>
                                <Route exact path="/orderPage" component={OrderPage}/>
                                <Route exact path="/help" component={Help}/>
                                <Route exact path="/product/:id" component={ProductPage}/>
                                <Route exact path="/" component={HomePage}/>
                            </ProductContext.Provider>
                    </Switch>
                </BrowserRouter>

                <Foot />
            </div>
        );
    }

    else {
        return (
            <div className="App">
                <BrowserRouter>
                    <MobileHead />
                    <Switch>
                            <ProductContext.Provider value={product}>
                                <Route exact path="/accountPage" component={AccountPage}/>
                                <Route exact path="/shoppingCartPage" component={ShoppingCartPage}/>
                                <Route exact path="/orderPage" component={OrderPage}/>
                                <Route exact path="/help" component={Help}/>
                                <Route exact path="/product/:id" component={ProductPage}/>
                                <Route exact path="/" component={HomePage}/>
                            </ProductContext.Provider>
                    </Switch>
                </BrowserRouter>

                <Foot />
            </div>
        )
    }
}

export default App;

