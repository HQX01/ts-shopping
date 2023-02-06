import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPage from "./index";
import {MemoryRouter, Route} from "react-router-dom";

describe('should render productPage at the screen', () => {

    test('should render one box at the screen', () => {
        render(
            <MemoryRouter>
                <Route exact path="/product/P123456" component={ProductPage} />
            </MemoryRouter>
        );
        expect(screen.getAllByRole('generic')).toHaveLength(1);
    });


});

