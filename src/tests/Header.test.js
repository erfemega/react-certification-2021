import React from 'react';
import { render, screen } from '@testing-library/react';
// import Header from './Header.component';
// import GlobalProvider from '../GlobalProvider/Global.provider';
// import mock from './../../mocks/youtube_mock_videos.json';
// import { HashRouter } from 'react-router-dom';

import Header from '../components/Header';
import { renderInContext } from './utils/utils';

describe('Rendering Header component', function () {
  it('Should render Header', function () {
    renderInContext(<Header />);
    expect(screen.getByText(/dark mode/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/browse something/i)).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
