import styled from 'styled-components';

const FormWrapper = styled.section`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button[type='submit'] {
    width: 5rem;
    margin-top: 1rem;
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 3px;
  }
`;

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & strong {
    display: block;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 0.4rem;
  }

  & input {
    color: ${(props) => props.theme.secondary};
    font-size: 1.2rem;
    width: 100%;
    padding: 0.4rem 0.6rem;
    border-radius: 3px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Error = styled.p`
  color: red;
  font-weight: bold;
  margin: 0;
  padding: 0.5rem auto;
`;

export { Form, FormGroup, FormWrapper, Error };
