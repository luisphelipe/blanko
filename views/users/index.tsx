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
import Pagination from "./Pagination";

// This is necessary since media queries are not natively supported on React
const styles = `
  button {
    align-self: center;
  }

  @media (max-width: 671px) {
    #header-wrapper {
      justify-content: center !important;
    }

    #header-wrapper > * {
      max-width: 100%;
    }
  }
`;

const New = ({ users, page, count }) => {
  return (
    <DefaultLayout title="Lista de Usuários" style={styles}>
      <CenteredContainer>
        <Column>
          <FlexWrapper
            id="header-wrapper"
            style={{
              maxWidth: "min(100%, 900px)",
              justifyContent: "space-between",
            }}
          >
            <Header>Lista de Usuários</Header>
            <LinkButton
              href="/users/new"
              style={{ fontSize: "20px", alignSelf: "left", maxWidth: "300px" }}
            >
              Cadastrar novo Usuário
            </LinkButton>
          </FlexWrapper>
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
          <Pagination
            url="/users"
            page={parseInt(page)}
            count={parseInt(count)}
          />
        </Column>
      </CenteredContainer>
    </DefaultLayout>
  );
};

export default New;
