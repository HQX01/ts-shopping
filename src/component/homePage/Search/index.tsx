import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from "@mui/material/Grid";

// @ts-ignore
export default function Search({search, onSearch}) {

    return (
        <Grid style={{marginBottom: 40}} >
            <form className="search" noValidate autoComplete="off">
                    <TextField id="outlined-search" label="search" type="search" variant="outlined" style={{width:'100%'}} value={search} onChange={onSearch}/>
            </form>
        </Grid>
    );
}
