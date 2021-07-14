import React from "react";
import { connect, styled } from "frontity";

import { HamburgerIcon } from "./menu-icon";
import Button from "./utilities/Button";

import Logo from "../assets/Icons/Logo_HackTzi.svg";
import sun from "../assets/Icons/sun.svg";

const HeaderOne = ({ state }) => {
  return (
    <StyledDiv>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
      </style>
      <HamburgerIcon size="20px" color="#7688AA" />
      <UnorderList>
        <li>
          <a href="#">Documentacion</a>
        </li>
        <li>
          <a href="#">Telegram</a>
        </li>
      </UnorderList>
      <ImgContainer href="/">
        <img src={Logo}></img>
      </ImgContainer>
      <Toggle>
        <div className="container">
          <img src={sun} />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </Toggle>
      <UnorderList>
        <li>
          <a href="#">Entrar</a>
        </li>
        <li>
          <Button
            href="#"
            content="Registrate"
            type="button"
            style={({ width: "135px" }, { height: "35px" })}
          />
        </li>
      </UnorderList>
    </StyledDiv>
  );
};

export default connect(HeaderOne);

const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 84px;
  padding: 7px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Rubik", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #516384;
  background-color: #fff;

  a:hover {
    cursor: pinter;
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    justify-content: space-around;

    ul {
      display: none;
    }
  }
`;
const UnorderList = styled.ul`
  margin: 0;
  padding: 0;

  & li {
    list-style: none;
    display: inline-block;
    margin-inline: 10px;
  }
`;
const ImgContainer = styled.a`
  img {
    width: 135px;
    heigth: 40px;
  }
`;
const Toggle = styled.label`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .switch {
    margin-inline-start: 5px;
    position: relative;
    display: inline-block;
    width: 33px;
    height: 17px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #bcc8de;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2.5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
