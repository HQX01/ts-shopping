import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfigSlider from "./ConfigSlider";


describe('should render ConfigSlider at the screen', () => {

    const mockItem = [
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        image: "https://source.unsplash.com/1600x900/?water"
    }];

    test('should render check button', () => {
        render(<ConfigSlider item={mockItem} />);
        expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    test('should render description at the screen', () => {
        render(<ConfigSlider item={mockItem} />);
        expect(screen.getAllByRole('heading')).toHaveLength(1);
        expect(screen.getAllByRole('generic')).toHaveLength(5);
    });

});

