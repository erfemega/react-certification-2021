import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.theme.secondary};
`;

const Wrapper = styled.section`
  text-align: center;
`;

export { Title, Wrapper };
