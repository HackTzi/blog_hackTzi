import React from 'react';
import { connect, styled } from "frontity";

const RegisterBtn = () => {
    return (
      <RegisterBtnStyle type="text">Registrarse</RegisterBtnStyle>
    );
}

export default connect(RegisterBtn);

const RegisterBtnStyle = styled.button`
    display: none;
    background: #DD1C1A;
    border: none;
    padding: 10px 25px;
    font-size: 16px;
    border-radius: 4px;
    color: #F8F9FB;
    font-weight: 600;
    cursor: pointer;
    @media (min-width: 768px) {
        display: block;
    }
`;