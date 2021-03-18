import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import useGlobal from '../../hooks/useGlobal';
import { Button } from './styled';

function BurgerButton() {
  const { toggleMenu } = useGlobal();
  return (
    <Button onClick={toggleMenu}>
      <FaHamburger />
    </Button>
  );
}

export default BurgerButton;
