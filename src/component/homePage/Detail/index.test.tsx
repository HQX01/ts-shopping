import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './index';

describe('should render detail at the screen', () => {

    test('should render grids at the screen', () => {
        render(<Detail />);
        expect(screen.getAllByRole('button')).toHaveLength(9);
    });

});

