import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import InputSearch from "./shared/InputSearch";


/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <>
          <NavItem key={name}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </NavItem>
        </>
      );
    })}
    <SearchBar>
      <InputSearch />
    </SearchBar>
  </NavContainer>
);

export default connect(Nav);

const SearchBar = styled.div`
    position: absolute;
    right: 42px;

    @media only screen and (max-width: 768px) {
      position: relative;
      right: 0;
      margin: 0 auto;
    }
`;

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  height: 57px;
  background-color: hsla(219, 76%, 67%, 1);
  display: flex;
  justify-content: center;
  position: relative;
`;

const NavItem = styled.div`
  padding: 0;
  color: #fff;
  // background: grey;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  margin: 4px 16px 0;
  justify-content: center;

  & > a {
    // display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Use for semantic approach to style the current link */
    &[aria-current="page"]:after {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: white;
      position: relative;
      top: 6px;
      background-color: hsla(219, 36%, 26%, 1);
    }

    &[aria-current="page"] {
      color: hsla(219, 36%, 26%, 1);
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "•";
      // display: inline-block;
      width: 24px;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
