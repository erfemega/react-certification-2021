import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  left: ${(props) => (props.open ? '0%' : '-25%')};
  /* display: ${(props) => (props.open ? 'block' : 'none')}; */
  background-color: ${(props) => props.theme.transparentHard};
  position: absolute;
  height: 100vh;
  width: 25%;
  transition: all 0.4s;
`;

const Header = styled.div`
  background-color: ${(props) => props.theme.main};
  border-bottom: 1px solid ${(props) => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  color: ${(props) => props.theme.secondary};
`;

const List = styled.ul`
  background-color: transparent;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Element = styled.li`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: none;
  color: ${(props) => props.theme.text};
  border-top: 1px solid ${(props) => props.theme.secondary};
  transition: all 0.3s;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid ${(props) => props.theme.secondary};
  }

  &:hover {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.main};
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => props.theme.text};
  width: 100%;
  height: 100%;
  padding: 0.5rem 0;
  text-align: center;

  &::visited {
    color: ${(props) => props.theme.text};
  }
  &:hover {
    color: ${(props) => props.theme.main};
  }
`;

export { Wrapper, Header, List, Element, NavLink };
