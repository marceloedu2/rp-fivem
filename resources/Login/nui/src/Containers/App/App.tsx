import React from "react";
import styled from "styled-components";

import { useSelector } from "../../index";
import Nui from "../../Nui";
import { store } from "../../index";

Nui.onEvent("SHOW", (payload: boolean) => {
  store.dispatch({ type: "SHOW", payload });
});

const Container = styled.div`
  * {
    font-family: "Catamaran", sans-serif;
  }

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-color: #24242c;
  background-position: center;
  background-image: url("https://media.discordapp.net/attachments/720491491994107935/720492573851910174/background-login.png");
`;

const FormsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 16px 0;
  color: white;
  display: flex;
  max-width: 280px;
  align-items: center;
  flex-direction: column;

  img {
    height: 120px;
    margin-bottom: 32px;
  }

  input {
    border: 0;
    width: 100%;
    background-color: #1a1d24;
    border-radius: 8px;
    padding: 12px 0;
    outline: none;
    color: white;
    margin-bottom: 12px;
  }
`;

const RegisterFormContainer = styled(FormContainer)`
  background-color: #1a1d24;
  max-width: 250px;
  border-radius: 8px;
  padding: 16px;
  margin-left: 32px;

  h4 {
    position: relative;
    width: 100%;
    text-align: center;
    margin: 0;
    padding-bottom: 8px;

    &::after {
      width: 100%;
      height: 1px;
      bottom: 0;
      position: absolute;
      left: 0;
      background-color: #30303a;
      content: "";
    }
  }

  img {
    object-fit: cover;
    max-width: 100%;
    height: 250px;
    margin-bottom: 0;
  }

  button {
    background-color: #32b85f;
  }
`;

const Button = styled.button`
  border: 0;
  width: 100%;
  color: white;
  outline: none;
  padding: 12px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 16px;
  border-radius: 8px;
  text-align: center;
  background-color: #3155df;
`;

const InputsContainer = styled.div`
  flex: 1;
`;

const App = () => {
  const show: boolean = useSelector((state: any) => state.Show);

  return (
    <Container hidden={!show}>
      <FormsContainer>
        <FormContainer>
          <img src="https://media.discordapp.net/attachments/720491491994107935/720492383749406840/Taverna_Logo.png" />
          <InputsContainer>
            <input type="text" />
            <input type="text" />
          </InputsContainer>
          <Button>Entrar</Button>
        </FormContainer>
        <RegisterFormContainer>
          <h4>Não possui uma conta ?</h4>
          <img src="https://media.discordapp.net/attachments/720491491994107935/720496884958887966/kisspng-grand-theft-auto-v-grand-theft-auto-san-andreas-g-grand-theft-auto-5-5b12bd4298d096.82683877.png" />
          <Button>Registrar</Button>
        </RegisterFormContainer>
      </FormsContainer>
    </Container>
  );
};

export default App;
