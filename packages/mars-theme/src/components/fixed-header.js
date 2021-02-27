import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import ToggleSwitch from "./toggle-switch";
import RegisterBtn from "./register-btn";
import { HamburgerIcon } from "./menu-icon";

const FixedHeader = ({ state }) => {
  return (
    <FixedHeaderStyle>
        <FixedHeaderContainer>
            <FixedHeaderContainerLinks>
                <StyledLink link="/">
                    <Logo>{state.frontity.title}</Logo>
                </StyledLink>
                <FixedHeaderItem>
                    <HamburgerIcon color="black" size="24px" />
                </FixedHeaderItem>
            </FixedHeaderContainerLinks>
            <Title>
                <Devider />
                <TitleLink link="/hola">
                    Leer ahora
                </TitleLink>
                <TitleContent>Los programadores siguen amando Rust, odian WordPress y Slack y se ganan muy bien la vida con Perl</TitleContent>
            </Title>
            <FixedHeaderContainerLinks>
                <FixedHeaderItem>
                    <ToggleSwitch
                        // toggleTheme={toggleTheme}
                        // isChecked={isChecked}
                        id="mode"
                        ariaLabel="dark mode toggle"
                    />
                </FixedHeaderItem>
                    <StyledLink link="/signup">
                        <RegisterBtn />
                    </StyledLink>
            </FixedHeaderContainerLinks>
        </FixedHeaderContainer>
    </FixedHeaderStyle>
    );
};

export default connect(FixedHeader);

const FixedHeaderStyle = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    background: #ffffff;
    border-bottom: 1px solid #7688AA;
    background: #ffffff;
    box-sizing: border-box;
`;

const FixedHeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    padding: 24px;
    color: #516384;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FixedHeaderContainerLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FixedHeaderItem = styled.span`
    @media (min-width: 768px) {
        margin-right: 20px;
        cursor: pointer;
    }
`;

const Logo = styled.h2`
    margin: 0;
    margin-right: 30px;
    color: #516B99;
`;

const Devider = styled.hr`
    border-left: 1px solid #7688AA;
    height: 100%;
    position: absolute;
`;

const Title = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        width: 300px;
        margin-right: 10px;
    }
    @media (min-width: 1000px) {
        width: 500px;
    }
    @media (min-width: 1280px) {
        width: 760px;
    }
`;

const TitleContent = styled.p`
    display: none;
    margin: 0;
    padding: 0;
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        width: 100%;
        white-space: nowrap;
        overflow: auto;
        overflow-y: hidden;
        margin-left: 15px;
        color: #000000;
        font-size: 18px;
        font-weight: bold;
        &::-webkit-scrollbar {
            height: 4px;
        }
        &::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 4px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #b3b3b3;
            box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        }
        &::-webkit-scrollbar-thumb:active {
            background-color: #999999;
        }
    }
`;

const TitleLink = styled(Link)`
    text-decoration: none;
    white-space: nowrap;
    margin-left: 45px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;