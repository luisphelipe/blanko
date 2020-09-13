import React from "react";
import {
  CenteredContainer,
  Header,
  FlexWrapper,
  LinkButton,
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

const New = ({ users }) => {
  return (
    <DefaultLayout title="Lista de Usuários" style={styles}>
      <CenteredContainer>
        <Header>Lista de Usuários</Header>
        {users.map((user) => (
          <div key={user.email}>{user.name}</div>
        ))}
        <FlexWrapper>
          <LinkButton href="/users/new">Cadastrar novo Usuário</LinkButton>
        </FlexWrapper>
      </CenteredContainer>
    </DefaultLayout>
  );
};

export default New;
