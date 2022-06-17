import styled from "styled-components";

export const Div = styled.div`
  background-color: #0f5d8f;
  height: 300px;
  width: 250px;
  border-radius: 10px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export const DivTitulo = styled.div`
  background-image: ${props => `url(${props.image.replace(/(\r\n|\n|\r)/gm, "")})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Titulo = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  text-shadow: black 0.1em 0.1em 0.2em;
`;

export const Responsavel = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0 1rem;
  text-align: left;
`;

export const Descricao = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0 1rem;
  text-align: left;
`;
