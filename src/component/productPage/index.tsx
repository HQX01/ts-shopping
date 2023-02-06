import * as React from 'react';
import Container from "@material-ui/core/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {useParams} from "react-router-dom";
import {useContext, useState} from "react";
import {ProductContext} from "../../context/context";
import {BrowserRouter, NavLink} from "react-router-dom";


export default function ProductPage(this: any) {
    const products = useContext(ProductContext);
    let param = useParams();
    const product = products.filter((item) => {
        return item.id === Object.values(param)[0];
    })

    const [count, setCount] = useState(0)
    const handleClick = (type:string) => {
        switch (type){
            case '+':
                setCount(count + 1)
                break;
            case '-':
                if(count > 0) {
                    setCount(count - 1)
                }
                break;
            default:
                return
        }
    }

    const productPrice = count * product[0].price
    const orderList = {product, count, productPrice}

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const addProductToCart = async () => {
        postData('http://localhost:8080/shoppingcart', orderList)
    }

    return (
        <Container maxWidth={"lg"}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Box sx={{ m: 2 }}>
                    <img src={require("../../images/" + product[0].img + '.jpeg')} alt="图片"/>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div">
                                {/*@ts-ignore*/}
                                {product[0].name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="div">
                                {/*@ts-ignore*/}
                                ¥{product[0].price}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                        {/*@ts-ignore*/}
                        {product[0].description}
                    </Typography>
                    <Typography>
                        {/*@ts-ignore*/}
                        <button onClick={()=>handleClick('-')}>-</button>
                        {count}
                        {/*@ts-ignore*/}
                        <button onClick={()=>handleClick('+')}>+</button>
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Typography>
                        <BrowserRouter>
                            <NavLink to={{pathname: "/shoppingCartPage", state:{orderList}}}>
                                {/*@ts-ignore*/}
                                <button onClick={() => addProductToCart()}>
                                    添加到购物车
                                </button>
                            </NavLink>
                        </BrowserRouter>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}
