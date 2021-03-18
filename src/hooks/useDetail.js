import { useContext } from 'react';
import DetailContext from '../context/DetailContext';
import { searchRelatedById } from '../repositories/videos';

function useDetail() {
  const context = useContext(DetailContext);
  if (!context) {
    throw Error('useDetail must be used within a DetailContextProvider');
  }
  const { detailState, setDetailState } = context;
  const updateDetailState = async ({ id, title, description }) => {
    const result = await searchRelatedById(id),
      newDetailState = {
        relatedVideos: result.data.items,
        currentVideo: {
          id,
          title,
          description,
        },
      };
    setDetailState(newDetailState);
  };
  return {
    detailState,
    setDetailState,
    updateDetailState,
  };
}

export default useDetail;
