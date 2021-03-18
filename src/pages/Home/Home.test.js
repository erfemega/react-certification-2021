import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './Home.page';

describe('Home page', function () {
  it('Should render Home component', function () {
    render(<HomePage />);
  });

  it('Should contains a text "Try a Video"', function () {
    render(<HomePage />);
    expect(screen.getByText('Try a Video')).toBeInTheDocument();
  });
});
