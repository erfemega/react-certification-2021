import React from 'react';
import BurgerButton from '../BurgerButton/BurgerButton';
import ProfileButton from '../ProfileButton/ProfileButton';
import SearchBar from '../SearchBar/SearchBar.component';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import { SiteHeader, HeaderWrapper } from './styled';

function Header() {
  return (
    <SiteHeader>
      <HeaderWrapper>
        <BurgerButton />
        <SearchBar />
        <ThemeSelector />
        <ProfileButton />
      </HeaderWrapper>
    </SiteHeader>
  );
}

export default Header;
