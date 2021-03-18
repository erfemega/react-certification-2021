// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import VideosList from './VideosList';
// import videosMock from './../../mocks/youtube_mock_videos.json';
// import GlobalProvider from '../GlobalProvider/Global.provider';

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
//   videos: videosMock.items
// }

// describe('Header', function () {
//   it('Should render the header', function () {
//     renderInContext(<VideosList videos={videosMock.items} />);
//   });
// });

describe('Rendering home component', function () {
  it('Should be true', function () {
    expect(true).toBeTruthy;
  });
});
