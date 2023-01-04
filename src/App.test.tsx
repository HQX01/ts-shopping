import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
// @ts-ignore
import mediaQuery from 'css-mediaquery';

function createMatchMedia(width: any) {
  return (query: any) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe('should render app at the screen', () => {

  test('should render mobile head when small screen', () => {
    // @ts-ignore
    window.matchMedia = createMatchMedia('600px');
    render(<App />);
    const linkElement = screen.getByText(/商城/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should render web head when big screen', () => {
    // @ts-ignore
    window.matchMedia = createMatchMedia('1200px');
    render(<App />);
    expect(screen.getByText(/首页/i)).toBeInTheDocument();
  });

});

