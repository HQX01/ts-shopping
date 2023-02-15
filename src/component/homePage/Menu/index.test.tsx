import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './index';

describe('should render menu at the screen', ()=>{

    test('should render menu', () => {
        render(<Menu />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    test('should render listitem', () => {
       render(<Menu />);
       expect(screen.getByText('电脑')).toBeInTheDocument();
       expect(screen.getByText('手机')).toBeInTheDocument();
       expect(screen.getByText('运动')).toBeInTheDocument();
    });

    test('should render five listitem at the screen', () => {
       render(<Menu />);
       expect(screen.getAllByRole('button')).toHaveLength(3);
    });

});
