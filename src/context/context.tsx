import React from "react";

export let products: any[] = [];
fetch('http://localhost:8080/products').then(res => res.json()).then(data => products = data)

export const ProductContext = React.createContext(products);
