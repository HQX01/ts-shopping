import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

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

function OrderPage() {
    const [orderProduct, setOrderProduct] = useState([])

    useEffect(() => {
        async function fetchProduct() {
            const response = await fetch('http://localhost:8080/orders');
            const json = await response.json();
            const res = json.filter((item: { id: number; }) => {return item.id !== 1})
            setOrderProduct(res);
        }
        fetchProduct()
    },[])

    const deleteOrder = async (id: any) => {
        await fetch(`http://localhost:8080/orders/${id}`, {
            method: 'DELETE',
        }).then((res) => {
            return res.json()
        })
        // @ts-ignore
        setOrderProduct(orderProduct.filter(m => m.id !== id))
    }

    const classes = useStyles();

    return (
        orderProduct.length !== 0 ?
            <div className={classes.root}>
                <Container maxWidth={"xl"}>
                    <Paper className={classes.paper}>
                        {/*@ts-ignore*/}
                        {orderProduct.map((item, index) => {
                            return (
                                <div key={index}>
                                    {/*@ts-ignore*/}
                                    <Grid>订单号：{item.id}</Grid>
                                    {/*@ts-ignore*/}
                                    <Grid>{item.product.map((productItem, index) => {
                                        return (
                                            <Grid container spacing={2} key={index}>
                                                <Grid item>
                                                    <ButtonBase className={classes.image}>
                                                        {/*@ts-ignore*/}
                                                        <img className={classes.img} alt="goods" src={require("../../images/" + productItem.img + ".jpeg")}/>
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <Typography gutterBottom variant="subtitle1">
                                                                {/*@ts-ignore*/}
                                                                {productItem.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {/*@ts-ignore*/}
                                                                {productItem.count}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs>
                                                            {/*@ts-ignore*/}
                                                            <Typography variant="subtitle1">¥{productItem.productPrice}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                        )
                                    })}</Grid>
                                    {/*@ts-ignore*/}
                                    <Grid style={{textAlign:"right"}}>共计：¥{item.totalPrice}</Grid>
                                    <Grid item xs>
                                        {/*@ts-ignore*/}
                                        <button onClick={() => deleteOrder(item.id)}>删除订单</button>
                                    </Grid>
                                </div>

                            )
                        })}
                    </Paper>
                </Container>
            </div> : <div className={classes.root}>
                <Container maxWidth={"xl"}>
                    暂无订单
                </Container>
            </div>
    );
}

export default OrderPage;
