import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #6eee97;
  padding: 0.5rem;

  margin: 0;
`;

const HeaderMargin = styled.div`
  margin: auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.div`
  font-size: 2rem;
  color: #318e7e;
  display: flex;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(256, 256, 256, 0.3);
  }
`;

const SearchBar = styled.div`
  background-color: rgba(256, 256, 256, 0.6);
  display: flex;
  align-items: center;
  margin: 0 1rem;
  border-radius: 5px;
  padding: 0.2rem;
  color: #666;

  &:hover {
    background-color: rgba(256, 256, 256, 0.9);
  }

  & > input {
    border: none;
    font-size: 1rem;
    margin-left: 0.5rem;
    color: #333;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }
`;

const DarkModeSwitch = styled.div`
  color: #318e7e;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin: 0 1rem;

  & > p {
    margin: 0 0.3rem;
  }

  & > input {
    margin: 0;
    height: 1.5rem;
  }
`;

const ProfileButton = styled.div`
  background-color: #318e7e;
  color: white;
  font-size: 2rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export {
  HeaderContainer,
  MenuButton,
  SearchBar,
  DarkModeSwitch,
  MenuContainer,
  ProfileButton,
  HeaderMargin,
};
