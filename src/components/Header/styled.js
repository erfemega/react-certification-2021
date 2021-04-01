import styled from 'styled-components';

const SiteHeader = styled.header`
  padding: 1rem;
  background-color: ${(props) => props.theme.main};
  color: #fcedda;
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { SiteHeader, HeaderWrapper };
