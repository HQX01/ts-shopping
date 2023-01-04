import React from 'react';
import { render, screen } from '@testing-library/react';
import MobileHead from './index';
import AccountPage from "../accountPage/index";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('should render mobile head at the screen', ()=>{

    test('should render mobilehead at the top of the page', () => {
        render(<MobileHead />);
        expect(screen.getByText('商城')).toBeInTheDocument();
    });

    test('should show complete head after click', () => {
       render(<MobileHead />);
        userEvent.click(screen.getByText('商城'));
        expect(screen.getByText('首页')).toBeInTheDocument();
    });

    test('should go to accountpage after click', () => {
        render(
            <MemoryRouter>
                <MobileHead />
                <AccountPage />
            </MemoryRouter>
        );
        userEvent.click(screen.getByText('商城'));
        userEvent.click(screen.getByText('我的账号'));
        expect(screen.getByText('accountPage')).toBeInTheDocument();
    });
});
