import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Goods from './goods/index';
import Container from "@material-ui/core/Container";

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
        <Container maxWidth={"xl"}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid container item spacing={2}>
                        <FormRow />
                    </Grid>
                    <Grid container item spacing={2}>
                        <FormRow />
                    </Grid>
                    <Grid container item spacing={2}>
                        <FormRow />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
