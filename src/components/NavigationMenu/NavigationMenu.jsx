import React from 'react';
import useGlobal from '../../hooks/useGlobal';
import { Header, Wrapper, List, Element, NavLink } from './styled';

export default function () {
  const { globalState, closeNavigation } = useGlobal();
  return (
    <Wrapper open={globalState.isMenuOpen} onBlur={closeNavigation}>
      <Header>Menu</Header>
      <List>
        <Element>
          <NavLink to="/">Home</NavLink>
          {globalState.authenticated ? <NavLink to="/favorites">Favorites</NavLink> : ''}
        </Element>
      </List>
    </Wrapper>
  );
}
