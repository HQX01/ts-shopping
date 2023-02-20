import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
        },
        image: {

        },
        img: {
            margin: 'auto',
            display: 'block',
        },
    }),
);



// @ts-ignore
function ShoppingCartPage() {
    const [shoppingProduct, setShoppingProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetchProduct();
    }, []);

    useEffect(() => {
        const price = calculateTotalPrice(shoppingProduct);
        setTotalPrice(price);
    }, [shoppingProduct]);

    const fetchProduct = async () => {
        try {
            const response = await fetch('http://localhost:8080/shoppingcart');
            const json = await response.json();
            const res = json.filter((item: { id: number; }) => item.id !== 1);
            setShoppingProduct(res);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProduct = async (id: number) => {
        try {
            await fetch(`http://localhost:8080/shoppingcart/${id}`, {
                method: 'DELETE',
            });
            // @ts-ignore
            setShoppingProduct(shoppingProduct.filter((item) => item.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

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

    const addShoppingcartToOrder = async () => {
        try {
            await postData('http://localhost:8080/orders', {
                orderList: shoppingProduct,
                totalPrice: totalPrice,
            });
            for (let i = 2; i <= shoppingProduct.length + 1; i++) {
                await fetch(`http://localhost:8080/shoppingcart/${i}`, {
                    method: 'DELETE',
                });
            }
            setShoppingProduct([]);
        } catch (error) {
            console.error(error);
        }
    };

    const calculateTotalPrice = (products: any[]) => {
        return products.reduce((sum, item) => sum + item.productPrice, 0);
    };

    const classes = useStyles();

    return (
        shoppingProduct.length !== 0 ?
                <div className={classes.root}>
                        <Paper className={classes.paper}>
                            {
                                shoppingProduct.map((item, index) => {
                                    return (
                                        <Grid container key={index} style={{marginBottom: 5}}>
                                            <Grid item>
                                                <ButtonBase className={classes.image}>
                                                    {/*@ts-ignore*/}
                                                    <img className={classes.img} alt="goods" src={require("../../images/" + item.product.img + ".jpeg")}/>
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <Typography gutterBottom variant="subtitle1">
                                                            {/*@ts-ignore*/}
                                                            {item.product.name}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                        <Typography variant="body2" color="textSecondary">
                                                            {/*@ts-ignore*/}
                                                            {item.count}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                        {/*@ts-ignore*/}
                                                        <Typography variant="subtitle1">¥{item.productPrice}</Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                        {/*@ts-ignore*/}
                                                        <button onClick={() => deleteProduct(item.id)}>删除商品</button>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }
                            <Grid style={{textAlign:"right"}}>共计：¥{totalPrice}</Grid>
                        </Paper>
                        <Grid>
                            <button onClick={() => addShoppingcartToOrder()}>
                                {/*@ts-ignore*/}
                                <Link to={`/orderPage`}>立即购买</Link>
                            </button>
                        </Grid>
                </div> : <div className={classes.root}>
                        暂无商品
                </div>
    );
}

export default ShoppingCartPage;
