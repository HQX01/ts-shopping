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

    const orderList = {product, count}

    const addProductToCart = () => {
        fetch('http://localhost:8080/shoppingcart', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderList),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
