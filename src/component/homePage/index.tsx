import React from 'react';
import Search from './Search';
import Menu from './Menu';
import Detail from './Detail';
import Slide from './Slide';
import './index.css';
import { Container } from '@material-ui/core';

function HomePage() {

    return (
        <div className="home">
            <Search />
            <Container style={{display:'flex', marginLeft:60, padding:0}}>
                <Menu />
                <Slide />
            </Container>
            <Detail />
        </div>
    );
}

export default HomePage;
