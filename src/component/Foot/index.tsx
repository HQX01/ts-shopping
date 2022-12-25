import React from 'react';
import { NavLink, BrowserRouter } from "react-router-dom";

export default function ButtonLink() {
    return (
        <div style={{marginLeft:60}}>
            <BrowserRouter>
                <NavLink to="/help">有问题请联系客服</NavLink>
            </BrowserRouter>
        </div>
    );
}
