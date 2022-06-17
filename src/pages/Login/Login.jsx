/* eslint-disable no-undef */
import { DivLogin, InputLogin, ButtonEnviar } from "./styled";
import "./styles.css";
import LogoAmf from "../../assets/image/logoamf.svg";
import { useState } from "react";
const Login = () => {
  const usuarios = [
    {
      email: "usuario@gmail.com",
      senha: "usuario1234",
    },
    {
      email: "administrador@gmail.com",
      senha: "adm1234",
    },
  ];
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const hadleChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
    console.log(email);
  };

  return (
    <div>
      <div className="div-principal">
        <div>
          <img src={LogoAmf} className="div-logo" />
        </div>
        <p className="text-sub-header">Agenda de Eventos</p>
        <DivLogin>
          <div className="login-input">
            <InputLogin
              placeholder="E-mail"
              name="email"
              onChange={hadleChange}
            />
          </div>
          <InputLogin placeholder="Senha" name="senha" />
          <p className="recuperar-senha">Recuperar senha</p>
          <div className="div-botao-enviar">
            <ButtonEnviar>Entrar</ButtonEnviar>
          </div>
        </DivLogin>
      </div>
    </div>
  );
};

export default Login;
