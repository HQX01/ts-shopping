import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

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


function ShoppingCartPage() {

    let shoppingProduct:any[] = [] //把请求的数据保存到这个数组里
    fetch('http://localhost:8080/shoppingcart').then(res => res.json()).then(data => shoppingProduct.concat(data)) //这个写的不对？
    console.log(shoppingProduct)

    // @ts-ignore
    // const productPrice = shoppingProduct[0].product.price * shoppingProduct[0].count;

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Container maxWidth={"xl"}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                {/*@ts-ignore*/}
                                <img className={classes.img} alt="goods" src={ require("../../images/" + shoppingProduct[0].product.img + ".jpeg" ) } />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {/*@ts-ignore*/}
                                        {shoppingProduct[0].product.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" color="textSecondary">
                                        {/*@ts-ignore*/}
                                        {shoppingProduct[0].count}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="subtitle1">¥</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}

export default ShoppingCartPage;
