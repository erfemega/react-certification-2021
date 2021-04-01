import styled from 'styled-components';

const SelectorWrapper = styled.div`
  margin-left: auto;

  & > label {
    color: ${(props) => props.theme.secondary};
  }
`;
export { SelectorWrapper };
