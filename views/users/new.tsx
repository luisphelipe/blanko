import React from "react";
import {
  CenteredContainer,
  Header,
  Form,
  FlexWrapper,
  Label,
  Input,
  Button,
} from "../components";
import DefaultLayout from "../layouts/default";

// This is necessary since media queries are not natively supported on React
const styles = `
  @media (max-width: 458px) {
    button {
      align-self: center;
    }
  }
`;

const New = () => {
  return (
    <DefaultLayout title="Cadastro de Usuário" style={styles}>
      <CenteredContainer>
        <Form>
          <Header>Cadastro de Usuário</Header>
          <FlexWrapper>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" type="text" />
          </FlexWrapper>
          <FlexWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" />
          </FlexWrapper>
          <Button type="submit">Enviar</Button>
        </Form>
      </CenteredContainer>
    </DefaultLayout>
  );
};

export default New;
