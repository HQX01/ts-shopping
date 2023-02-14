import * as React from 'react';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';
import {useContext} from "react";
import {ProductContext} from "../../../context/context";

// @ts-ignore
export default function Detail({ product }) {
    const products = useContext(ProductContext);

    return (
        product?.length !== 0 ?
                <Grid container item spacing={2}>
                    {/*@ts-ignore*/}
                    {product.map((item, index) => {
                        return (
                            // @ts-ignore
                            <ProductContext.Provider value={item} key={index}>
                                <Grid container item xs={12} xl={4}>
                                    <Goods />
                                </Grid>
                            </ProductContext.Provider>
                        )
                    })}
                </Grid>
        :
                <Grid container item spacing={2}>
                    {/*@ts-ignore*/}
                    {products.map((item, index) => {
                        return (
                            // @ts-ignore
                            <ProductContext.Provider value={item} key={index}>
                                <Grid container item xs={12} xl={4}>
                                    <Goods />
                                </Grid>
                            </ProductContext.Provider>
                        )
                    })}
                </Grid>
    );
}
