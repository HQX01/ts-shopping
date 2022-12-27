import React from 'react';
import Search from './Search';
import Menu from './Menu';
import Detail from './Detail';
import Slide from './Slide';
import './index.css';
import Container from '@material-ui/core/Container';

function HomePage() {


    return (
        <div className="home">
<Container maxWidth={"xl"}>
    <Search />
    <Container style={{display:'flex'}} className="nav">
        <Menu />
        <Slide />
    </Container>
    <Detail />
</Container>

        </div>
    );
}

export default HomePage;
