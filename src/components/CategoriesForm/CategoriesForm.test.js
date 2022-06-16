import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoriesForm from './CategoriesForm';

describe('<CategoriesForm />', () => {
  test('it should mount', () => {
    render(<CategoriesForm />);
    
    const categoriesForm = screen.getByTestId('CategoriesForm');

    expect(categoriesForm).toBeInTheDocument();
  });
});