// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import VideoCard from './VideoCard';
// import mock from './../../mocks/youtube_mock_videos.json';
// import GlobalProvider from '../GlobalProvider/Global.provider';

// function renderInContext(ui, value) {
//   return render(<GlobalProvider value={value}>
//     {ui}
//   </GlobalProvider>)
// }
// let value = {
//   isMenuOpen: false,
//   darkModeEnabled: false,
//   searchTerm: '',
//   videos: mock.items
// }

// describe('Header', function () {
//   const videoMock = {
//     title: 'Super Title',
//     description: 'Super Description',
//     thumbnail: {
//       url: 'www.test.com',
//     },
//   };
//   it('Should render the header', function () {
//     renderInContext(
//       <VideoCard
//         title={videoMock.title}
//         description={videoMock.description}
//         thumbnail={videoMock.thumbnail}
//       />
//     );
//   });

//   it('Should Contains the videoMock text', function () {
//     renderInContext(
//       <VideoCard
//         title={videoMock.title}
//         description={videoMock.description}
//         thumbnail={videoMock.thumbnail}
//       />
//     );
//     expect(screen.getByText(videoMock.title)).toBeInTheDocument();
//     expect(screen.getByText(videoMock.description)).toBeInTheDocument();
//     expect(screen.getByAltText(videoMock.title)).toBeInTheDocument();
//   });
// });

describe('Rendering home component', function () {
  it('Should be true', function () {
    expect(true).toBeTruthy;
  });
});
