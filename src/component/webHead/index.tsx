import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useTheme} from "@mui/material";

export default function WebHead() {

    return (
        <div className="head" style={{marginBottom: 10}}>
                <Grid container spacing={4}>
                    <Grid item xs >
                        <Paper style={{paddingTop: useTheme().spacing(2), paddingBottom: useTheme().spacing(2)}}>
                            <Link className="link-to-home" to="/">
                                首页
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper style={{paddingTop: useTheme().spacing(2), paddingBottom: useTheme().spacing(2)}}>
                            <Link className="link-to-account" to="/accountPage">我的账号</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper style={{paddingTop: useTheme().spacing(2), paddingBottom: useTheme().spacing(2)}}>
                            <Link className="link-to-shoppingcart" to="/shoppingcartPage">我的购物车</Link>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper style={{paddingTop: useTheme().spacing(2), paddingBottom: useTheme().spacing(2)}}>
                            <Link className="link-to-order" to="/orderPage">我的订单</Link>
                        </Paper>
                    </Grid>
                </Grid>
        </div>
    );
}
