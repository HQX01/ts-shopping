import * as React from 'react';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';
import Container from "@material-ui/core/Container";

const products =[
    {
        "img": "yashua",
        "name": "牙刷",
        "price": 20.00,
        "description": "很好用",
        "id": "P123456"
    },
    {
        "img": "diannao",
        "name": "电脑",
        "price": 2000.00,
        "description": "aaaaaaa",
        "id": "P111111"
    },
    {
        "img": "xiyiji",
        "name": "洗衣机",
        "price": 1220.00,
        "description": "dddd",
        "id": "P122222"
    },
    {
        "img": "kaoxiang",
        "name": "烤箱",
        "price": 2290.00,
        "description": "kkkkk",
        "id": "P122323"
    },
    {
        "img": "guo",
        "name": "锅",
        "price": 20100.00,
        "description": "ddadafda",
        "id": "P111211"
    },
    {
        "img": "men",
        "name": "门",
        "price": 11220.00,
        "description": "ddddasdsafdsfdd",
        "id": "P122122"
    },
    {
        "img": "bingxiang",
        "name": "冰箱",
        "price": 22190.00,
        "description": "asdfg",
        "id": "P172323"
    },
    {
        "img": "wenduji",
        "name": "温度计",
        "price": 30.00,
        "description": "热得快",
        "id": "P101211"
    },
    {
        "img": "shouji",
        "name": "手机",
        "price": 999.00,
        "description": "打算发的",
        "id": "P128122"
    },
];


export const ProductContext = React.createContext(products);



export default function Detail() {

    return (
        <Container maxWidth={"xl"}>
                <Grid container item spacing={2} sm={12} lg={4} style={{display: 'flex'}}>
                    {products.map((item, index) => {
                    return (
                        // @ts-ignore
                        <ProductContext.Provider value={item} key={index}>
                            <Goods />
                        </ProductContext.Provider>
                    )
                })}
                </Grid>
        </Container>
    );
}
