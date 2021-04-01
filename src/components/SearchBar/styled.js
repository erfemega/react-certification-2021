import styled from 'styled-components';

const InputWrapper = styled.div`
  margin-left: 5%;
  display: flex;
  > input {
    height: 1.8rem;
    border-radius: 0px 5px 5px 0px;
    border: none;
    width: 15rem;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.secondary};

    &:hover {
      background-color: ${(props) => props.theme.secondary};
      color: ${(props) => props.theme.main};
    }

    &:focus {
      outline: none;
    }
  }
`;

const SearchBarIcon = styled.div`
  background-color: #fff;
  border-radius: 5px 0px 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  color: ${(props) => props.theme.main};
  background-color: ${(props) => props.theme.secondary}; ;
`;

export { InputWrapper, SearchBarIcon };
