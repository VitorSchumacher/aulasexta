import styled from "styled-components";

export const Div = styled.div`
  background-color: #08293E;
  height: 10vh;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
`;

export const Img = styled.img`
  max-width: 200px;
  max-height: 150px;
`;

export const Logout = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Palavra = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
`;

export const Titulo = styled.h1`
  flex-grow: 2;
  font-size: 2rem;
  color: #fff;
  text-shadow: black 0.1em 0.1em 0.2em;
`;
