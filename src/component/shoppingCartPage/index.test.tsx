import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react';
import ShoppingCartPage from "./index";
import {MemoryRouter} from "react-router-dom";

describe('ShoppingCartPage component', () => {
    test('should render "暂无商品" when shoppingProduct is empty', () => {
        const { getByText } = render(<ShoppingCartPage />);
        expect(getByText('暂无商品')).toBeInTheDocument();
    });

    test('should render shoppingProduct when it is not empty', async () => {
        const fakeProducts = [
            { id: 2, product: { img: 'yashua', name: 'Product 1' }, count: 1, productPrice: 100 },
            { id: 3, product: { img: 'diannao', name: 'Product 2' }, count: 2, productPrice: 200 },
        ];
        // @ts-ignore
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: async () => fakeProducts,
        });

        const { findByText } = render(
            <MemoryRouter>
                <ShoppingCartPage />
            </MemoryRouter>
        );
        const product1 = await waitFor(() => findByText('Product 1'))
        const product2 = await waitFor(() => findByText('Product 2'))

        expect(product1).toBeInTheDocument();
        expect(product2).toBeInTheDocument();
    });


    test('should add shopping cart to order when "立即购买" button is clicked', async () => {
        const fakeProducts = [
            { id: 2, product: { img: 'yashua', name: 'Product 1' }, count: 1, productPrice: 100 },
            { id: 3, product: { img: 'diannao', name: 'Product 2' }, count: 2, productPrice: 200 },
        ];
        // @ts-ignore
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: async () => fakeProducts,
        });
        // @ts-ignore
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
            json: async () => ({}),
        });
        const { findByText } = render(
            <MemoryRouter>
                <ShoppingCartPage />
            </MemoryRouter>
        );
        const buyButton = await waitFor(() => findByText('立即购买'))

        fireEvent.click(buyButton);

        expect(global.fetch).toHaveBeenCalledTimes(2);
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/orders', expect.anything());
        expect(global.fetch).toHaveBeenCalledWith('http://localhost:8080/shoppingcart');
    });
});
