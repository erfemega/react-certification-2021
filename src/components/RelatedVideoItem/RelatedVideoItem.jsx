import React, { useContext } from 'react';
import { searchRelatedById } from '../../repositories/videos';
import DetailContext from '../../context/DetailContext';
import { ItemWrapper, Image, Title } from './styled';
import useDetail from '../../hooks/useDetail';

function RelatedVideoItem({ id, description, thumbnail, title }) {
  // const {detailContextState ,setDetailContextState} = useContext(DetailContext);
  // const handleRelatedClick = async (event) => {
  //   let id = detailContextState.video.id.videoId;
  //   let newRelated = await searchRelatedById(id);
  //   let newDetailState = {
  //     video: detailContextState.video,
  //     relatedVideos: newRelated
  //   }
  //   setDetailContextState(newDetailState);
  // }
  const { updateDetailState } = useDetail(),
    current = { id, description, title },
    handleClick = () => {
      updateDetailState(current);
    };
  return (
    <ItemWrapper onClick={handleClick}>
      <Image src={thumbnail} alt={title} />
      <Title>{title}</Title>
    </ItemWrapper>
  );
}

export default RelatedVideoItem;
