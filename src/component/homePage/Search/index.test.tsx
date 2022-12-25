import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './index';

describe('should render search at the screen', ()=>{

    test('should render input box at the screen', () => {
        render(<Search />);
        expect(screen.getByLabelText('search')).toBeInTheDocument();
        expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });

});
