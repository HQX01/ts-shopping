import React from 'react';
import { render, screen } from '@testing-library/react';
import Goods from './index';

describe('should render goods at the screen', () => {

     const mockData =
    {
        "img": "https://www.baidu.com",
        "name": "牙刷",
        "price": 20.00,
        "description": "很好用",
        "id": "P123456"
    };

    test('should render grid at the screen', () => {
        render(<Goods products={mockData}/>);
        expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    test('should render descriptions at the screen', () => {
        render(<Goods products={mockData}/>);
        expect(screen.getAllByRole('heading', {level: 6})).toHaveLength(2);
    });

    test('should render images at the screen', () => {
       render(<Goods products={mockData}/>);
       expect(screen.getByRole('img')).toBeInTheDocument();
    });

    test('should render price at the screen', () => {
       render(<Goods products={mockData}/>);
       expect(screen.getByText('¥' + mockData.price)).toBeInTheDocument();
    });

    test('should render ID at the screen', () => {
        render(<Goods products={mockData}/>);
        expect(screen.getByText(mockData.id)).toBeInTheDocument();
    });

    test('should render description at the screen', () => {
        render(<Goods products={mockData}/>);
        expect(screen.getByText(mockData.description)).toBeInTheDocument();
    });

    test('should render name at the screen', () => {
        render(<Goods products={mockData}/>);
        expect(screen.getByText(mockData.name)).toBeInTheDocument();
    });
});

