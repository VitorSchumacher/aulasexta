import styled from "styled-components";

export const Div = styled.div`
  background-color: #0f5d8f;
  width: 30vw;
  display: flex;
  flex: 1;
  min-height: 88vh;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-size: 1.3rem;
  padding-top: 10px;
  color: #fff;
  text-shadow: black 0.1em 0.1em 0.2em;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Input = styled.input`
  width: 20vw;
  border-radius: 5px;
  border-style: none;
  height: 4vh;
  margin: 15px 0;
  background-color: #ddf1fe;
  font-size: 1rem;
`;
export const Input2 = styled.input`
  font-size: 1rem;
  border-radius: 5px;
  border-style: none;
  font-family: Arial, Helvetica, sans-serif;
  padding: 3px;
  margin: 15px 0;
  color: #777777;
  width: 7vw;
  background-color: #ddf1fe;
`;

export const Label = styled.label`
  background-color: #ddf1fe;
  margin: 10px 0;
  padding: 3px;
  width: 20vw;
  border-radius: 5px;
  color: #777777;
  text-align: center;
`;

export const Input3 = styled.textarea`
  width: 20vw;
  border-radius: 5px;
  border-style: none;
  height: 20vh;
  margin: 15px 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 3px;
  background-color: #ddf1fe;
  resize: none;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #08293e;
  border-radius: 5px;
  font-size: 1rem;
  height: 5vh;
  width: 20vw;
  margin-top: 15px;
  font-weight: bold;
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: #0f3045;
  }
  &:active {
    background-color: #08293e;
  }
`;

export const DivTime = styled.div`
  display: flex;
  width: 20vw;  
  flex-direction: row;
  justify-content: space-between;
`