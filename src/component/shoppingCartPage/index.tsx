import React from 'react';
import {useLocation} from "react-router-dom";
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

    const { state } = useLocation();

    // @ts-ignore
    const productPrice = state.orderList.product[0].price * state.orderList.count;

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Container maxWidth={"xl"}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                {/*@ts-ignore*/}
                                <img className={classes.img} alt="goods" src={ require("../../images/" + state.orderList.product[0].img + ".jpeg" ) } />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {/*@ts-ignore*/}
                                        {state.orderList.product[0].name}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" color="textSecondary">
                                        {/*@ts-ignore*/}
                                        {state.orderList.count}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="subtitle1">¥{productPrice}</Typography>
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
