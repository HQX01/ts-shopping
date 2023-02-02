import React from 'react';
import { render, screen } from '@testing-library/react';
import Goods from './index';
import {ProductContext} from "../../../../context/context";
import {MemoryRouter, Route, Router} from "react-router-dom";

describe('should render goods at the screen', () => {

    const mockData = {
        "img": "shouji",
        "name": "手机",
        "price": 999.00,
        "description": "打算发的",
        "id": "P128122"
    }

    test('should render grid at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
        expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    test('should render descriptions at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
        expect(screen.getAllByRole('heading', {level: 6})).toHaveLength(2);
    });

    test('should render images at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
       expect(screen.getByRole('img')).toBeInTheDocument();
    });

    test('should render price at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
       expect(screen.getByText('¥' + mockData.price)).toBeInTheDocument();
    });

    test('should render ID at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
        expect(screen.getByText(mockData.id)).toBeInTheDocument();
    });

    test('should render description at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
        expect(screen.getByText(mockData.description)).toBeInTheDocument();
    });

    test('should render name at the screen', () => {
        render(
            <MemoryRouter>
                <Route>
                    {/*@ts-ignore*/}
                    <ProductContext.Provider value={mockData}>
                        <Goods />
                    </ProductContext.Provider>
                </Route>
            </MemoryRouter>
        );
        expect(screen.getByText(mockData.name)).toBeInTheDocument();
    });
});

