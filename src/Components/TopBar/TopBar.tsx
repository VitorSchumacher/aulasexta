import React from "react";

import { Div, Img, Palavra, Div2, Titulo, Logout } from "./styled";

import LogoAmf from "../../assets/image/logo-home.png";
import IconLeave from "../../assets/image/icon-exit.png";

const TopBar = (props) => {
  return (
    <>
      <Div>
        <Div2>
          <Img src={LogoAmf} />
        </Div2>
        <Titulo>Agenda de Eventos</Titulo>
        <Logout src={IconLeave} onClick={() => props.setLogged(false)}/>
      </Div>
    </>
  );
};

export default TopBar;
