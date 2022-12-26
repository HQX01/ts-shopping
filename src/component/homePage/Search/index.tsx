import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import './index.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export default function Search() {
    const classes = useStyles();

    return (
        <Container className="search" maxWidth={"xl"}>
            <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-search" label="search" type="search" variant="outlined"/>
            </form>
        </Container>
    );
}
