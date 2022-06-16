import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reports from './Reports';

describe('<Reports />', () => {
  test('it should mount', () => {
    render(<Reports />);
    
    const reports = screen.getByTestId('Reports');

    expect(reports).toBeInTheDocument();
  });
});