import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0.5rem;
  height: 380px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${(props) => props.theme.transparentSmooth};
  color: ${(props) => props.theme.text};
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 180px;
`;

const Title = styled.h5`
  font-size: 1rem;
  display: block;
  margin: 0.5rem;
  color: ${(props) => props.theme.secondary};
`;

const Description = styled.p`
  overflow: hidden;
  padding: 0 1rem;
  text-align: justify;
  margin: 0;
  font-size: 0.8rem;
`;

export { Container, Image, Title, Description };
