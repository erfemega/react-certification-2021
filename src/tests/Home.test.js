import React from 'react';
import { render, screen } from '@testing-library/react';
// import HomePage from './Home.page';
// import mock from './../../mocks/youtube_mock_videos.json';
// import GlobalProvider from '../../components/GlobalProvider/Global.provider';
// import { HashRouter } from 'react-router-dom';
import HomePage from '../pages/Home/Home.page';
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

// describe('Home page', function () {
//   let value = {
//     videos: mock.items
//   };
//   it('Should render Home component', function () {
//     renderInContext(<HomePage />, value);
//   });

//   it('Should contains a text "Try a Video"', function () {
//     renderInContext(<HomePage />, value);
//     expect(screen.getByText('Try a Video')).toBeInTheDocument();
//   });
// });

describe('Rendering home component', function () {
  it('Should render Home component', function () {
    renderInContext(<HomePage />);
    expect(screen.getByText(/try a video/i)).toBeInTheDocument();
  });
});
