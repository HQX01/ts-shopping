import React from 'react';
import { render, screen } from '@testing-library/react';
import WebHead from './index';
import HomePage from "../homePage/index";
import AccountPage from "../accountPage/index";
import ShoppingCartPage from "../shoppingCartPage/index";
import OrderPage from "../orderPage/index";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('should render web head at the screen', ()=>{

    test('should render head at the top of the page', () => {
        render(
            <MemoryRouter>
                <WebHead />
            </MemoryRouter>);
        const homePage = screen.getByText("首页");
        const accountPage = screen.getByText("我的账号");
        const shoppingCartPage = screen.getByText("我的购物车");
        const orderPage = screen.getByText("我的订单");
        expect(homePage).toBeInTheDocument();
        expect(accountPage).toBeInTheDocument();
        expect(shoppingCartPage).toBeInTheDocument();
        expect(orderPage).toBeInTheDocument();
    });

    test('should go to homePage when click the link', () => {
        render(
            <MemoryRouter>
                <WebHead />
                <HomePage />
            </MemoryRouter>
        );
        userEvent.click(screen.getByText(/首页/i));
        expect(screen.getByText(/首页/i)).toBeInTheDocument();
    });

    test('should go to AccountPage when click the link', () => {
        render(
            <MemoryRouter>
                <WebHead />
                <AccountPage />
            </MemoryRouter>
        );
        userEvent.click(screen.getByText(/我的账号/i));
        expect(screen.getByText(/accountPage/i)).toBeInTheDocument();
    });

    test('should go to OrderPage when click the link', () => {
        render(
            <MemoryRouter>
                <WebHead />
                <OrderPage />
            </MemoryRouter>
        );
        userEvent.click(screen.getByText(/我的订单/i));
        expect(screen.getByText(/orderPage/i)).toBeInTheDocument();
    });
});
