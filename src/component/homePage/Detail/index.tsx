import * as React from 'react';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';
import Container from "@material-ui/core/Container";
import axios from "axios";

// @ts-ignore
let products = [];
axios.get('https://04980f0b-abbd-4c65-aaca-526f6216c954.mock.pstmn.io/product').then((response) => {
    products = response.data;
})

// @ts-ignore
export const ProductContext = React.createContext(products);



export default function Detail() {
    return (
        <Container maxWidth={"xl"}>
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
        </Container>
    );
}
