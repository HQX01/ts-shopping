import * as React from 'react';
import Container from "@material-ui/core/Container";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Picture from '../../images/goods.jpeg';


export default function ProductPage() {
    return (
        <Container maxWidth={"lg"}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Box sx={{ m: 2 }}>
                    <img src={Picture} alt="图片"/>
                </Box>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h4" component="div">
                                Toothbrush
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography gutterBottom variant="h6" component="div">
                                $4.50
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button>添加到购物车</Button>
                </Box>
            </Box>
        </Container>
    );
}
