import youtubeApi from './../api/youtube';
import mock from './../mocks/youtube_mock_videos.json';
const mocking = false;

const searchByTerm = async (term) => {
  if (mocking) {
    console.warn('MOCKING TRUE');
    return {
      data: {
        ...mock,
      },
    };
  }
  try {
    let response = await youtubeApi.get('search', {
      params: {
        q: term,
      },
    });
    return response;
  } catch (error) {
    console.error('ERRORRRR', error);
    return {
      data: {
        ...mock,
      },
    };
  }
};

const searchRelatedById = async (id) => {
  if (mocking) {
    console.warn('MOCKING TRUE');
    return {
      data: {
        ...mock,
      },
    };
  }
  try {
    let response = await youtubeApi.get('search', {
      params: {
        relatedToVideoId: id,
        type: 'video',
      },
    });
    return response;
  } catch (error) {
    console.error('ERROOR', error);
    return {
      data: {
        ...mock,
      },
    };
  }
};

export { searchByTerm, searchRelatedById };
