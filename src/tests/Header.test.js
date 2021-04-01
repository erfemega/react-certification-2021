import React from 'react';
import { render, screen } from '@testing-library/react';
// import Header from './Header.component';
// import GlobalProvider from '../GlobalProvider/Global.provider';
// import mock from './../../mocks/youtube_mock_videos.json';
// import { HashRouter } from 'react-router-dom';

import Header from '../components/Header';
import { renderInContext } from './utils/utils';

// function renderInContext(ui, value) {
//   return render(
//     <HashRouter>
//       <GlobalProvider value={value}>
//         {ui}
//       </GlobalProvider>
//     </HashRouter>
//   )
// }
// let value = {
//   isMenuOpen: false,
//   darkModeEnabled: false,
//   searchTerm: '',
//   videos: mock.items
// }

// describe('Header', function () {
//   it('Should render the header', function () {
//     renderInContext(<Header />, {})
//   });

//   it('Should Contains the Dark Mode text', function () {
//     renderInContext(<Header />, {})
//     expect(screen.getByText('Dark Mode')).toBeInTheDocument();
//   });

//   it('Should containd an element with "Browse Something" placeholder', function () {
//     renderInContext(<Header />, {})
//     expect(screen.getByPlaceholderText('Browse something'));
//   });
// });

describe('Rendering Header component', function () {
  it('Should render Header', function () {
    renderInContext(<Header />);
    expect(screen.getByText(/dark mode/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/browse something/i)).toBeInTheDocument();
  });
});
