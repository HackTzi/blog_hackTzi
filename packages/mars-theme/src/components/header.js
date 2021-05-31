import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import ToggleSwitch from "./toggle-switch";
import RegisterBtn from "./register-btn";
// import MobileMenu from "./menu";
import { HamburgerIcon } from "./menu-icon";

const Header = ({ state }) => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderContainerLinks>
          <HeaderItem>
            <HamburgerIcon color="black" size="24px" />
          </HeaderItem>
          <LinksItem>
            <a href="https://www.notion.so/Proyectos-Doc-HackTzi-d1e9d4d49d3f4cb7a8c88452ddecc383" target="_blank">
              Documentacion
            </a>
          </LinksItem>
          <LinksItem>
            <a href="https://github.com/HackTzi" target="_blank">
                Telegram
            </a>
          </LinksItem>
        </HeaderContainerLinks>
        <StyledLink link="/">
          <Logo>{state.frontity.title}</Logo>
        </StyledLink>
        <HeaderContainerLinks>
          <HeaderItem>
            <ToggleSwitch
              // toggleTheme={toggleTheme}
              // isChecked={isChecked}
              id="mode"
              ariaLabel="dark mode toggle"
            />
          </HeaderItem>
          <LinksItem>
            <StyledLink link="/login">
              Entrar
            </StyledLink>
          </LinksItem>
            <StyledLink link="/signup">
              <RegisterBtn />
            </StyledLink>
        </HeaderContainerLinks>
        {/* <MobileMenu /> */}
      </HeaderContainer>
      <Nav />
    </HeaderStyle>
  );
};

export default connect(Header);

const HeaderStyle = styled.header`
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid #fff;
  background: #ffffff;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 24px;
  color: #516384;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderItem = styled.span`
  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

const LinksItem = styled.span`
  display: none;
  margin-right: 20px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Logo = styled.h2`
  margin: 0;
  color: #516B99;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;