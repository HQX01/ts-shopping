import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
        <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-search" label="search" type="search" variant="outlined" style={{width:1600, marginLeft:60, marginBottom:40}}/>
        </form>
    );
}
