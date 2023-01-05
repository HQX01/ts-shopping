import React, {useContext} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from "@material-ui/core/Container";
import {ProductContext} from "../index";


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

    const product = useContext(ProductContext);
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Container maxWidth={"xl"}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                {/*@ts-ignore*/}
                                <img className={classes.img} alt="goods" src={ require("../../../../images/" + product.img + ".jpeg" ) } />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {/*@ts-ignore*/}
                                        {product.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" color="textSecondary">
                                        {/*@ts-ignore*/}
                                        {product.id}
                                    </Typography>
                                </Grid>
                                <Grid item xs>
                                    {/*@ts-ignore*/}
                                    <Typography variant="subtitle1">¥{product.price}</Typography>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        {/*@ts-ignore*/}
                                        {product.description}
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
