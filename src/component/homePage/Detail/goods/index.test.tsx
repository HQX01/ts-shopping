import React from 'react';
import { render, screen } from '@testing-library/react';
import Goods from './index';

describe('should render goods at the screen', () => {

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

    test('should render price at the screen', () => {
       render(<Goods />);
       expect(screen.getByText('price')).toBeInTheDocument();
    });

    test('should render ID at the screen', () => {
        render(<Goods />);
        expect(screen.getByText('ID')).toBeInTheDocument();
    });

    test('should render description at the screen', () => {
        render(<Goods />);
        expect(screen.getByText('description')).toBeInTheDocument();
    });

    test('should render name at the screen', () => {
        render(<Goods />);
        expect(screen.getByText('name')).toBeInTheDocument();
    });
});

