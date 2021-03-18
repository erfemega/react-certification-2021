import React from 'react';
import { FaHamburger, FaSearch, FaUser } from 'react-icons/fa';
import {
  DarkModeSwitch,
  HeaderContainer,
  MenuButton,
  SearchBar,
  MenuContainer,
  ProfileButton,
  HeaderMargin,
} from './styled';

function Header() {
  return (
    <HeaderContainer>
      <HeaderMargin>
        <MenuContainer>
          <MenuButton>
            <FaHamburger />
          </MenuButton>
          <SearchBar type="text">
            <FaSearch />
            <input type="text" placeholder="Browse something" />
          </SearchBar>
        </MenuContainer>
        <MenuContainer>
          <DarkModeSwitch>
            <input type="checkbox" />
            <p>Dark Mode</p>
          </DarkModeSwitch>
          <ProfileButton>
            <FaUser />
          </ProfileButton>
        </MenuContainer>
      </HeaderMargin>
    </HeaderContainer>
  );
}

export default Header;
