import styled from 'styled-components';

const Button = styled.button`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.main};
  cursor: pointer;
  padding: 0.2rem;
  margin-left: 0.5rem;
  & p {
    margin: 0;
  }
`;

export { Button };
