import React from "react";
import { connect, styled } from "frontity";
import { HamburgerIcon } from "./menu-icon";
import Logo from "../assets/Icons/Logo_HackTzi.svg";

const HeaderOne = ({ state }) => {
  return (
    <StyledDiv>
      <HamburgerIcon size="20px" color="#7688AA" />
      <UnorderList>
        <li>Documentacion</li>
        <li>Telegram</li>
      </UnorderList>
      <img src={Logo}></img>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <UnorderList>
        <li>
          <a href="#">Entrar</a>
        </li>
        <li>
          <a href="#">Registrarse</a>
        </li>
      </UnorderList>
    </StyledDiv>
  );
};
export default connect(HeaderOne);

const StyledDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;
const UnorderList = styled.ul`
  & li {
    list-style: none;
    display: inline-block;
  }
`;
