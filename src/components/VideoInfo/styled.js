import styled from 'styled-components';

const InfoWrapper = styled.div`
  padding: 0 2rem 0 2rem;
  color: ${(props) => props.theme.text};
`;

const Title = styled.h3`
  color: ${(props) => props.theme.secondary};
`;

export { InfoWrapper, Title };
