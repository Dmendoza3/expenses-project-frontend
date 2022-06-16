import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExpensesForm from './ExpensesForm';

describe('<ExpensesForm />', () => {
  test('it should mount', () => {
    render(<ExpensesForm />);
    
    const expensesForm = screen.getByTestId('ExpensesForm');

    expect(expensesForm).toBeInTheDocument();
  });
});