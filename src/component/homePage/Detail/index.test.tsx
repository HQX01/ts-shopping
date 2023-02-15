import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './index';
import {ProductContext, products} from "../../../context/context";

describe('should render detail at the screen', () => {

    test('should render grids at the screen', () => {
        render(
            <ProductContext.Provider value={products}>
                <Detail product={[]}/>
            </ProductContext.Provider>
        );
        expect(screen.getAllByRole('generic')).toHaveLength(2);
    });

});

