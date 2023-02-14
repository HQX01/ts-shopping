import React from 'react';
import { NavLink } from "react-router-dom";
import Container from "@material-ui/core/Container";

export default function Foot() {
    return (
        <div style={{position: 'relative'}}>
            <Container maxWidth={"lg"}>
                    <NavLink to="/help">有问题请联系客服</NavLink>
            </Container>
        </div>
    );
}
