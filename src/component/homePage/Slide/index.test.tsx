import React from 'react';
import { render, screen } from '@testing-library/react';
import Slide from './index';

describe('should render Slide at the screen', () => {

    test('should render slide', () => {
        render(<Slide />);
        expect(screen.getAllByRole('button')).toHaveLength(7);
    });

    test('should render items', () => {
        render(<Slide />);
        expect(screen.getAllByRole('generic')).toHaveLength(28);
    });
});

