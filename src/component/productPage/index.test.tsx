import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductPage from "./index";

describe('should render productPage at the screen', () => {

    test('should render one box at the screen', () => {
        render(<ProductPage />);
        expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    test('should render picture at the screen', () => {
        render(<ProductPage />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    test('should render price at the screen', () => {
       render(<ProductPage />);
       expect(screen.getByText('$4.50')).toBeInTheDocument();
    });

    test('should render product name at the screen', () => {
        render(<ProductPage />);
        expect(screen.getByText(/toothbrush/i)).toBeInTheDocument();
    });

    test('should render description at the screen', () => {
        render(<ProductPage />);
        expect(screen.getByText('Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the hall.')).toBeInTheDocument();
    });

});

