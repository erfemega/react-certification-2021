import styled from 'styled-components';

const Button = styled.button`
  padding: 0.3rem;
  border-radius: 10px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export { Button };
