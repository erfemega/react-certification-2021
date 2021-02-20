import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header', function () {
  it('Should render the header', function () {
    render(<Header />);
  });

  it('Should Contains the Dark Mode text', function () {
    render(<Header />);
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('Should containd an element with "Browse Something" placeholder', function () {
    render(<Header />);
    expect(screen.getByPlaceholderText('Browse something'));
  });
});
