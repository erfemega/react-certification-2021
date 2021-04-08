import React, { useEffect, useState } from 'react';
import { InputWrapper, SearchBarIcon } from './styled';
import { FaSearch } from 'react-icons/fa';
import useGlobal from '../../hooks/useGlobal';

function SearchBar() {
  const { updateFromNewTerm } = useGlobal(),
    [term, setTerm] = useState('rock'),
    handleTermChange = (event) => {
      setTerm(event.target.value);
    },
    handleEnter = async (event) => {
      if (event.key === 'Enter') {
        console.log('running');
        await updateFromNewTerm(term);
      }
    };

  useEffect(() => {
    updateFromNewTerm('rock');
  }, []);

  return (
    <InputWrapper>
      <SearchBarIcon>
        <FaSearch />
      </SearchBarIcon>
      <input
        type="text"
        placeholder="Browse something"
        onChange={handleTermChange}
        onKeyDown={handleEnter}
      />
    </InputWrapper>
  );
}

export default SearchBar;
