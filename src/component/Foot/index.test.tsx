import React from 'react';
import { render, screen } from '@testing-library/react';
import Foot from './index';
import Help from "../Help/index";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('should render foot at the screen', ()=>{

    test('should render foot at the bottom of the page', () => {
        render(<Foot />);
        const linkElement = screen.getByText("有问题请联系客服");
        expect(linkElement).toBeInTheDocument();
    });

    test('should go to help page when click the link', () => {
       render(
           <MemoryRouter>
            <Foot />
               <Help />
       </MemoryRouter>
       );
        userEvent.click(screen.getByText(/有问题请联系客服/i));
        expect(screen.getByText(/客服热线：010-78799798/i)).toBeInTheDocument();
    });

});
