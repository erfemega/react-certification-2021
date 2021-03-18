import React from 'react';
import useGlobal from '../../hooks/useGlobal';
import { SelectorWrapper } from './styled';

function ThemeSelector() {
  const { toggleTheme } = useGlobal();
  return (
    <SelectorWrapper>
      <label htmlFor="theme-selector">Dark Mode</label>
      <input onChange={toggleTheme} id="theme-selector" type="checkbox" />
    </SelectorWrapper>
  );
}

export default ThemeSelector;
