import React from 'react';
import WebHead from './component/webHead';
import MobileHead from "./component/mobileHead";
import Foot from './component/Foot';
import HomePage from './component/homePage';
import AccountPage from './component/accountPage';
import ShoppingCartPage from './component/shoppingCartPage';
import OrderPage from './component/orderPage';
import Help from './component/Help';
import ProductPage from "./component/productPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import {useMediaQuery, useTheme} from "@mui/material";



function App() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    if(matches) {
        return (
            <div className="App">
                <BrowserRouter>
                    <WebHead />
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/accountPage" component={AccountPage}/>
                        <Route exact path="/shoppingCartPage" component={ShoppingCartPage}/>
                        <Route exact path="/orderPage" component={OrderPage}/>
                        <Route exact path="/help" component={Help}/>
                        <Route exact path="/product" component={ProductPage}/>
                        <Redirect to="/"/>
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
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/accountPage" component={AccountPage}/>
                        <Route exact path="/shoppingCartPage" component={ShoppingCartPage}/>
                        <Route exact path="/orderPage" component={OrderPage}/>
                        <Route exact path="/help" component={Help}/>
                        <Route exact path="/product" component={ProductPage}/>
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>

                <Foot />
            </div>
        )
    }
}

export default App;

