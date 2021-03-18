import styled from 'styled-components';

const VideoWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  & > iframe {
    width: 62vw;
    height: 500px;
  }
`;

export { VideoWrapper };
