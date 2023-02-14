import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

type Anchor = 'top';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center'
        },
    }),
);

export default function MobileHead() {
    const [state, setState] = React.useState({
        top: false,
    });

    const classes = useStyles();

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.MouseEvent) => {
                if (
                    event.type === 'keydown'
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
        >
            <AppBar position="static" style={{marginBottom: 20}}>
                <Toolbar>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                    <Link className="link-to-home" to="/">首页</Link>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                    <Link className="link-to-account" to="/accountPage">我的账号</Link>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                    <Link className="link-to-shoppingcart" to="/shoppingcartPage">我的购物车</Link>
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                    <Link className="link-to-order" to="/orderPage">我的订单</Link>
                            </Paper>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );

    return (
        <div style={{position: 'relative'}}>
            { (
                <React.Fragment key={'top'}>
                    <Button onClick={toggleDrawer('top', true)}>{'商城'}</Button>
                    <Drawer
                        anchor={'top'}
                        open={state['top']}
                        onClose={toggleDrawer('top', false)}
                    >
                        {list('top')}
                    </Drawer>
                </React.Fragment>
            )}
        </div>
    );
}
