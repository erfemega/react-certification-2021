import { Link } from 'react-router-dom';
import styled from 'styled-components';

const variables = {
  buttonWidth: '2.5rem',
};

const Button = styled.button`
  color: ${(props) => props.theme.main};
  background-color: ${(props) => props.theme.secondary};
  outline: none;
  border: none;
  border-radius: 50%;
  width: ${variables.buttonWidth};
  height: ${variables.buttonWidth};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-left: 5%;
`;

const ToggleWrapper = styled.ul`
  position: absolute;
  background-color: ${(props) => props.theme.secondary};
  list-style: none;
  padding: 0;
  width: 100px;
  overflow: hidden;
  height: ${(props) => (props.visible ? '1.5rem' : '0rem')};
  transition: all 0.5s;
`;

const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.main};
  padding: 0;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.main};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;

  &:visited {
    color: ${(props) => props.theme.main};
  }

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

const Avatar = styled.img`
  width: ${variables.buttonWidth};
  height: auto;
`;

export { Button, ToggleWrapper, ButtonWrapper, Option, NavLink, Avatar };
