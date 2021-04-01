import React, { useState } from 'react';
import DetailContext from '../../context/DetailContext';

function DetailContextProvider(props) {
  const [detailState, setDetailState] = useState({
    relatedVideos: [],
    currentVideo: {},
  });
  const context = {
    detailState,
    setDetailState,
  };

  return <DetailContext.Provider value={context} {...props} />;
}

export default DetailContextProvider;
