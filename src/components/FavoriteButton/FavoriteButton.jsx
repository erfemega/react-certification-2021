import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import useDetail from '../../hooks/useDetail';
import useGlobal from '../../hooks/useGlobal';
import { Button } from './styled';

export default function FavoriteButton({ video }) {
  const {
    globalState,
    videoIsInFavorites,
    addToFavorites,
    removeFromFavorites,
  } = useGlobal();
  const { detailState } = useDetail();
  const [buttonMessage, setButtonMessage] = useState('');
  const handleClick = () => {
    if (videoIsInFavorites(video)) {
      removeFromFavorites(video);
    } else {
      addToFavorites(video);
    }
  };
  useEffect(() => {
    if (videoIsInFavorites(video)) {
      setButtonMessage('Remove from Favorites');
    } else {
      setButtonMessage('Add to Favorites');
    }
  }, [globalState.favorites, detailState.currentVideo]);
  return (
    <Button onClick={handleClick}>
      <p>
        {buttonMessage} <FaStar />
      </p>
    </Button>
  );
}
