import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderPage from "./index";

describe('should render orderPage at the screen', () => {

    test('should render OrderPage', () => {
        render(<OrderPage />);
        const linkElement = screen.getByText(/orderpage/i);
        expect(linkElement).toBeInTheDocument();
    });

});

