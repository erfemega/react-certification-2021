import React from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../../hooks/useGlobal';
import { Header, Wrapper, List, Element, NavLink } from './styled';

export default function () {
  const { globalState } = useGlobal();
  return (
    <Wrapper open={globalState.isMenuOpen}>
      <Header>Menu</Header>
      <List>
        <Element>
          <NavLink to="/">Home</NavLink>
        </Element>
      </List>
    </Wrapper>
  );
}
