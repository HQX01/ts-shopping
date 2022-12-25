import React from 'react';
import { render, screen } from '@testing-library/react';
import Help from "./index";

describe('should render helpPage at the screen', () => {

    test('renders Help', () => {
        render(<Help />);
        const linkElement = screen.getByText("客服热线：010-78799798");
        expect(linkElement).toBeInTheDocument();
    });

})
