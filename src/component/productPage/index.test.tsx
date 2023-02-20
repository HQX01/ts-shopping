import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductPage from "./index";
import {ProductContext} from "../../context/context";

describe('ProductPage', () => {
    const products = [
        {
            id: '1',
            name: 'Product 1',
            description: 'Description of product 1',
            price: 10,
            img: 'yashua',
        },
        {
            id: '2',
            name: 'Product 2',
            description: 'Description of product 2',
            price: 20,
            img: 'diannao',
        },
    ];

    it('renders product information correctly', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/product/1' }]}>
                <Routes>
                    <Route path="/product/:id" element={<ProductPage />}>
                    </Route>

                </Routes>
            </MemoryRouter>,
            {
                wrapper: ({ children }) => (
                    <ProductContext.Provider value={products}>
                        {children}
                    </ProductContext.Provider>
                ),
            }
        );

        const name = screen.getByTestId('name');
        expect(name).toHaveTextContent('Product 1');

        const description = screen.getByText('Description of product 1');
        expect(description).toBeInTheDocument();

        const price = screen.getByText('¥10');
        expect(price).toBeInTheDocument();
    });

    it('updates count correctly', () => {
        render(
            <MemoryRouter initialEntries={[{ pathname: '/product/1' }]}>
                <Routes>
                    <Route path="/product/:id" element={<ProductPage />}>
                    </Route>
                </Routes>
            </MemoryRouter>,
            {
                wrapper: ({ children }) => (
                    <ProductContext.Provider value={products}>
                        {children}
                    </ProductContext.Provider>
                ),
            }
        );

        const decreaseButton = screen.getByText('-');
        const count = screen.getByText('1');
        const increaseButton = screen.getByText('+');

        fireEvent.click(increaseButton);
        expect(count).toHaveTextContent('2');

        fireEvent.click(decreaseButton);
        expect(count).toHaveTextContent('1');
    });

});
