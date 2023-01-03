import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function Head() {
    const classes = useStyles();

    return (
        <div className="head" style={{width:'100%'}}>
            <Container maxWidth={"lg"}>
                <div className={classes.root}>
                    <AppBar position="static" style={{marginBottom: 20}}>
                        <Toolbar>
                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <BrowserRouter>
                                            <NavLink className="link-to-home" to="/homePage">首页</NavLink>
                                        </BrowserRouter>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <BrowserRouter>
                                            <NavLink className="link-to-account" to="/accountPage">我的账号</NavLink>
                                        </BrowserRouter>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <BrowserRouter>
                                            <NavLink className="link-to-shoppingcart" to="/shoppingcartPage">我的购物车</NavLink>
                                        </BrowserRouter>
                                    </Paper>
                                </Grid>
                                <Grid item xs>
                                    <Paper className={classes.paper}>
                                        <BrowserRouter>
                                            <NavLink className="link-to-order" to="/orderPage">我的订单</NavLink>
                                        </BrowserRouter>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </div>
            </Container>
        </div>
    );
}
