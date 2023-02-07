import React from 'react';
import { NavLink, BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";

export default function ButtonLink() {
    return (
        <div style={{marginLeft:60, position: 'fixed',
            bottom: 0,
            width: '100%'}}>
            <Container maxWidth={"lg"}>
                <BrowserRouter>
                    <NavLink to="/help">有问题请联系客服</NavLink>
                </BrowserRouter>
            </Container>
        </div>
    );
}
