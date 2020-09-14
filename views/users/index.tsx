import React from "react";
import {
  CenteredContainer,
  Header,
  FlexWrapper,
  LinkButton,
  //
  Column,
  Table,
  Tr,
  Th,
  Td,
  Span,
} from "./components";
import DefaultLayout from "../layouts/default";

// This is necessary since media queries are not natively supported on React
const styles = `
    button {
      align-self: center;
    }
  }
`;

const New = ({ users }) => {
  return (
    <DefaultLayout title="Lista de Usuários" style={styles}>
      <CenteredContainer>
        <Column>
          <Header>Lista de Usuários</Header>
          <Table>
            <Tr>
              <Th style={{ width: "35%" }}>Nome</Th>
              <Th style={{ width: "45%" }}>E-mail</Th>
              <Th style={{ width: "20%" }}>Ações</Th>
            </Tr>
            {users.map((user) => (
              <Tr key={user.email}>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <FlexWrapper
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <Span>1</Span>
                    <Span>2</Span>
                  </FlexWrapper>
                </Td>
              </Tr>
            ))}
          </Table>
          <FlexWrapper style={{ justifyContent: "center" }}>
            {"<< < 1 ... 3 4 5 ... 7 > >>"}
          </FlexWrapper>
          <FlexWrapper>
            <LinkButton href="/users/new" style={{ fontSize: "20px" }}>
              Cadastrar novo Usuário
            </LinkButton>
          </FlexWrapper>
        </Column>
      </CenteredContainer>
    </DefaultLayout>
  );
};

export default New;
