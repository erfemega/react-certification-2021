import React from 'react';
import { ItemWrapper, Image, Title } from './styled';
import useDetail from '../../hooks/useDetail';

function RelatedVideoItem({ id, description, thumbnail, title, video }) {
  const { updateDetailState } = useDetail(),
    current = { id, description, title, video },
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
