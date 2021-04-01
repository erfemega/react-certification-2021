import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin: 0.5rem 0;
  transition: all 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.bg};
  }
`;

const Image = styled.img`
  width: 8rem;
  margin: 0.5rem 0rem;
  padding: 0 0.5rem;
`;

const Title = styled.p`
  margin: 0 1rem;
  color: ${(props) => props.theme.secondary};
`;

export { ItemWrapper, Image, Title };
