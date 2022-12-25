import React from 'react';
import { render, screen } from '@testing-library/react';
import Slide from './index';

describe('should render Slide at the screen', () => {

    test('should render slide', () => {
        render(<Slide />);
        expect(screen.getByText('商品1')).toBeInTheDocument();
        expect(screen.getByText('商品2')).toBeInTheDocument();
        expect(screen.getByText('商品3')).toBeInTheDocument();
        expect(screen.getByText('商品4')).toBeInTheDocument();
        expect(screen.getByText('商品5')).toBeInTheDocument();
        expect(screen.getByText('商品6')).toBeInTheDocument();
    });

});

