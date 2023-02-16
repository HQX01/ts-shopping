import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoppingCartPage from "./index";

describe('should render shoppingcartpage at the screen', ()=>{

    test('should render information when there is no product in shoppingcart', () => {
        render(<ShoppingCartPage />)
        expect(screen.getByText('暂无商品')).toBeInTheDocument()
    })



});
