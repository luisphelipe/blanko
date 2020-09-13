import React from "react";
import {
  CenteredContainer,
  Header,
  Form,
  FlexWrapper,
  Label,
  Input,
  LinkButton,
  Button,
  ErrorList,
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

const New = ({ error, value }) => {
  console.log(error.details.map((error) => error.message));

  return (
    <DefaultLayout title="Cadastro de Usuário" style={styles}>
      <CenteredContainer>
        <Form action="/users" method="POST">
          <Header>Cadastro de Usuário</Header>
          <FlexWrapper>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" type="text" value={value.name} />
          </FlexWrapper>
          <FlexWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" value={value.email} />
          </FlexWrapper>
          <FlexWrapper>
            <LinkButton href="/users">Voltar</LinkButton>
            <Button type="submit">Enviar</Button>
          </FlexWrapper>
          <ErrorList>
            {error && error.details.map((error) => <li>{error.message}</li>)}
          </ErrorList>
        </Form>
      </CenteredContainer>
    </DefaultLayout>
  );
};

export default New;
