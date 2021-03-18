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
  margin-left: 5%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
  }
`;

export { Button };
