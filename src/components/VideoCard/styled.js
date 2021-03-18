import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 1%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
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
`;

const Description = styled.p`
  overflow: hidden;
  padding: 1rem;
  text-align: justify;
  margin-bottom: 1rem;
`;

export { Container, Image, Title, Description };
