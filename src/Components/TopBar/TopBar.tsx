import React from "react";

import { Div, Img, Palavra, Div2, Titulo } from "./styled";

import LogoAmf from "../../assets/image/logo-home.png";

const TopBar = () => {
  return (
    <>
      <Div>
        <Div2>
          <Img src={LogoAmf} />
        </Div2>
        <Titulo>Agenda de Enventos</Titulo>
      </Div>
    </>
  );
};

export default TopBar;
