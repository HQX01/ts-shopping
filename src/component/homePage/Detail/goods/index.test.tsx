import React from 'react';
import { render, screen } from '@testing-library/react';
import Goods from './index';

describe('should render accountPage at the screen', () => {

    test('should render grid at the screen', () => {
        render(<Goods />);
        expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    test('should render descriptions at the screen', () => {
        render(<Goods />);
        expect(screen.getAllByRole('heading', {level: 6})).toHaveLength(2);
    });

    test('should render images at the screen', () => {
       render(<Goods />);
       expect(screen.getByRole('img')).toBeInTheDocument();
    });

    test('should render remove at the screen', () => {
       render(<Goods />);
       expect(screen.getByText('Remove')).toBeInTheDocument();
    });
});

