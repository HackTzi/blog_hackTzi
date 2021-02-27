import React from 'react';
import { connect, styled } from "frontity";

const ToggleSwitch = ({ toggleTheme, isChecked, ariaLabel, id }) => {
    return (
      <DarkMode>
        <DarkModeIcon>&#127774;</DarkModeIcon>
        <Toggle>
          <Input
            type="checkbox"
            onChange={toggleTheme}
            checked={isChecked}
            id={id}
            aria-label={ariaLabel}
          />
          <Slider />
        </Toggle>
      </DarkMode>
    );
}

export default connect(ToggleSwitch);

const DarkMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DarkModeIcon = styled.span`
  margin-right: 10px;
  font-size: 25px;
`;

const Toggle = styled.div`
  position: relative;
`;
const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  &:hover + span:after {
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.2);
  }
  &:checked + span {
    &:after {
      transform: translate3d(39px, 0, 0);
    }
  }
`;
const Slider = styled.span`
  position: relative;
  display: block;
  height: 25px;
  width: 64px;
  border-radius: 32px;
  transition: 0.25s ease-in-out;
  background: #BCC8DE;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.15);
  &:after {
    content: '';
    position: absolute;
    border-radius: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background: #1C283E;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.25s ease-in-out;
    width: 25px;
    height: 25px;
  }
`;