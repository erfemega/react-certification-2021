import { bySnippet, byContentDetail } from './../api/youtube';
import mock from './../mocks/youtube_mock_videos.json';
const mocking = false;

const searchByTerm = async (term) => {
  console.log(term);
  if (mocking) {
    console.warn('MOCKING TRUE');
    return {
      data: {
        ...mock,
      },
    };
  }
  try {
    let response = await bySnippet.get('search', {
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
    let response = await bySnippet.get('search', {
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

const getContentDetailById = async (id) => {
  let response = await byContentDetail.get('videos', {
    params: {
      id: id,
    },
  });
  return response;
};

export { searchByTerm, searchRelatedById, getContentDetailById };
