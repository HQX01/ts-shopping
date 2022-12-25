import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCartPage from "./index";

describe('should render shoppingCartPage at the screen', () => {

    test('should render shoppingCartPage', () => {
        render(<ShoppingCartPage />);
        const linkElement = screen.getByText(/shoppingcartpage/i);
        expect(linkElement).toBeInTheDocument();
    });

});

