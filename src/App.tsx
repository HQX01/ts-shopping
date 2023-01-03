import React from 'react';
import Head from './component/Head';
import Foot from './component/Foot';
import HomePage from './component/homePage';
import AccountPage from './component/accountPage';
import ShoppingCartPage from './component/shoppingCartPage';
import OrderPage from './component/orderPage';
import Help from './component/Help';
import ProductPage from "./component/productPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                    <Head />
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

export default App;

