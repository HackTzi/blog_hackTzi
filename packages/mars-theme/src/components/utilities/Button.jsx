import React from 'react';
import { connect, styled } from "frontity";

const Button = (props) => {
    return(
        <StyledLink href={props.href}>
            <button type={props.type} onClick={props.onClick} style={props.style} >{props.content}</button>
        </StyledLink>
    );
}

export default connect(Button);

const StyledLink = styled.a`
    button {
        border-radius: 5px;
        border: none;
        background-color: #DD1C1A;
        color: #F8F9FB;
    }
    button:hover {
        cursor: pointer;
        opacity: .5;
    }
`;