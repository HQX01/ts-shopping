import * as React from 'react';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';
import Container from "@material-ui/core/Container";
import {useContext} from "react";
import {ProductContext} from "../../../App";

export default function Detail() {
    const products = useContext(ProductContext)

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
