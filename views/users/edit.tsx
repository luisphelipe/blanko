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
} from "./components";
import DefaultLayout from "../layouts/default";

// This is necessary since media queries are not natively supported on React
const styles = `
  @media (max-width: 458px) {
    button {
      align-self: center;
    }
  }
`;

const New = ({ user, error, value = {} }: any) => {
  return (
    <DefaultLayout title="Cadastro de Usuário" style={styles}>
      <CenteredContainer>
        <Form action={`/users/${user.id}`} method="POST">
          <Header>Edição de Usuário</Header>
          <FlexWrapper>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={value.name || user.name}
            />
          </FlexWrapper>
          <FlexWrapper>
            <LinkButton href="/users">Voltar</LinkButton>
            <Button type="submit">Salvar</Button>
          </FlexWrapper>
          <ErrorList>
            {error
              ? error.details.map((error) => <li>{error.message}</li>)
              : undefined}
          </ErrorList>
        </Form>
      </CenteredContainer>
    </DefaultLayout>
  );
};

export default New;
