import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OrderPage from "./index";


describe('OrderPage', () => {
    const orderList = [
        {
            id: 2,
            orderList: [
                {
                    product: { name: 'Product 1', img: 'men', id: 1 },
                    count: 2,
                    productPrice: 99.99,
                },
                {
                    product: { name: 'Product 2', img: 'diannao', id: 2 },
                    count: 1,
                    productPrice: 149.99,
                },
            ],
            totalPrice: 249.97,
        },
    ];

    beforeEach(() => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(orderList),
            })
        );
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render the list of orders and a delete button', async () => {
        render(<OrderPage />);
        expect(await screen.findByText('订单号：2')).toBeInTheDocument();
        expect(await screen.findByText('Product 1')).toBeInTheDocument();
        expect(await screen.findByText('2')).toBeInTheDocument();
        expect(await screen.findByText('¥99.99')).toBeInTheDocument();
        expect(await screen.findByText('Product 2')).toBeInTheDocument();
        expect(await screen.findByText('1')).toBeInTheDocument();
        expect(await screen.findByText('¥149.99')).toBeInTheDocument();
        expect(await screen.findByText('共计：¥249.97')).toBeInTheDocument();
        expect(await screen.findByText('删除订单')).toBeInTheDocument();
    });

    it('should call the deleteOrder function when the delete button is clicked', async () => {
        render(<OrderPage />);
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ message: 'Order deleted' }),
            })
        );
        const deleteButton = await screen.findByText('删除订单');
        fireEvent.click(deleteButton);
        expect(global.fetch).toHaveBeenCalledWith(
            'http://localhost:8080/orders/2',
            { method: 'DELETE' }
        );
    });

    it('should display a message when there are no orders', async () => {
        // @ts-ignore
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([]),
            })
        );
        render(<OrderPage />);
        expect(screen.getByText('暂无订单')).toBeInTheDocument();
    });
});
