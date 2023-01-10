import React, {useContext} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from "@material-ui/core/Container";
import {NavLink} from "react-router-dom";
import {ProductContext} from "../../../../App";

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


export default function Goods() {

    // @ts-ignore
    const {id, img, name, price, description} = useContext(ProductContext);
    const classes = useStyles();

    // @ts-ignore
    return (
        <div className={classes.root} >
            <Container maxWidth={"xl"}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <NavLink to={`/product/${id}`}>
                                    <img className={classes.img} alt="goods" src={ require("../../../../images/" + img + ".jpeg" ) } />
                                </NavLink>
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {name}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" color="textSecondary">
                                        {id}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="subtitle1">¥{price}</Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        {description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
}
