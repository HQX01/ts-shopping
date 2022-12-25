import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountPage from './index';

describe('should render accountPage at the screen', () => {

    test('should render accountPage', () => {
        render(<AccountPage />);
        const linkElement = screen.getByText(/accountpage/i);
        expect(linkElement).toBeInTheDocument();
    });

});

