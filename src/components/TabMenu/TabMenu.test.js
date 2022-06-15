import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TabMenu from './TabMenu';

describe('<TabMenu />', () => {
  test('it should mount', () => {
    render(<TabMenu />);
    
    const tabMenu = screen.getByTestId('TabMenu');

    expect(tabMenu).toBeInTheDocument();
  });
});