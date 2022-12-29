import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';
import Container from "@material-ui/core/Container";
import {useEffect, useState} from "react";

const products =[
    {
        "img": "https://www.baidu.com",
        "name": "牙刷",
        "price": 20.00,
        "description": "很好用",
        "id": "P123456"
    },
    {
        "img": "https://www.baidu.com",
        "name": "电脑",
        "price": 2000.00,
        "description": "aaaaaaa",
        "id": "P111111"
    },
    {
        "img": "https://www.baidu.com",
        "name": "洗衣机",
        "price": 1220.00,
        "description": "dddd",
        "id": "P122222"
    },
    {
        "img": "https://www.baidu.com",
        "name": "烤箱",
        "price": 2290.00,
        "description": "kkkkk",
        "id": "P122323"
    },
    {
        "img": "https://www.baidu.com",
        "name": "锅",
        "price": 20100.00,
        "description": "ddadafda",
        "id": "P111211"
    },
    {
        "img": "https://www.baidu.com",
        "name": "门",
        "price": 11220.00,
        "description": "ddddasdsafdsfdd",
        "id": "P122122"
    },
    {
        "img": "https://www.baidu.com",
        "name": "并向你",
        "price": 22190.00,
        "description": "asdfg",
        "id": "P172323"
    },
    {
        "img": "https://www.baidu.com",
        "name": "温度计",
        "price": 30.00,
        "description": "热得快",
        "id": "P101211"
    },
    {
        "img": "https://www.baidu.com",
        "name": "不知道",
        "price": 999.00,
        "description": "打算发的",
        "id": "P128122"
    },
];


// @ts-ignore
function FormRow({productLists}) {
    const [ productList, setProductList ] = useState(productLists);
    useEffect(() => {
        setProductList(productLists);
    }, [productLists]);
    return (
        <React.Fragment>
            <Grid item xl={4} xs={12}>
                <Goods products={productList[0]} />
            </Grid>
            <Grid item xl={4} xs={12}>
                <Goods products={productList[1]}/>
            </Grid>
            <Grid item xl={4} xs={12}>
                <Goods products={productList[2]}/>
            </Grid>
        </React.Fragment>
    );
}

export default function Detail() {
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid container item spacing={2}>
                        {/*// @ts-ignore*/}
                        <FormRow productLists={products.slice(0,3)} />
                    </Grid>
                    <Grid container item spacing={2}>
                        {/*// @ts-ignore*/}
                        <FormRow productLists={products.slice(3,6)}/>
                    </Grid>
                    <Grid container item spacing={2}>
                        {/*// @ts-ignore*/}
                        <FormRow productLists={products.slice(6,9)}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
