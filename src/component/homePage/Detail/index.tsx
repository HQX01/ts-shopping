import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';


function FormRow() {
    return (
        <React.Fragment>
            <Grid item xl={4} xs={12}>
                <Goods />
            </Grid>
            <Grid item xl={4} xs={12}>
                <Goods />
            </Grid>
            <Grid item xl={4} xs={12}>
                <Goods />
            </Grid>
        </React.Fragment>
    );
}

export default function Detail() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginLeft:60}}>
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </Box>
    );
}
