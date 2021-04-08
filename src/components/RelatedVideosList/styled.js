import styled from 'styled-components';

const ListWrapper = styled.div`
  min-width: 20rem;
  max-width: 30rem;
  background-color: ${(props) => props.theme.transparentSmooth};
  margin: 0.5rem;
  width: 30vw;
`;

const Title = styled.h4`
  padding: 0;
  margin: 0.2rem auto;
  text-align: center;
  color: ${(props) => props.theme.secondary};
`;

const Message = styled.p`
  text-align: center;
  color: ${(props) => props.theme.secondary};
  margin: 0.2rem auto;
`;

export { ListWrapper, Title, Message };
