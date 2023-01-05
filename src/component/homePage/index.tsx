import React from 'react';
import Search from './Search';
import Menu from './Menu';
import Detail from './Detail';
import Slide from './Slide';
import Container from '@material-ui/core/Container';

function HomePage() {


    return (
        // @ts-ignore
        <div style={{margin:'0 auto'}}>
            <Container maxWidth={"xl"}>
                <Search />
                <Container style={{display:'flex', width:'100%'}}>
                    <Menu />
                    <Slide />
                </Container>
                <Detail />
            </Container>
        </div>
    );
}

export default HomePage;
