import React from "react";
import axios from "axios";

export let products: any[] = [];
axios.get('https://04980f0b-abbd-4c65-aaca-526f6216c954.mock.pstmn.io/product').then((response) => {
    products = response.data;
})


export const ProductContext = React.createContext(products);
