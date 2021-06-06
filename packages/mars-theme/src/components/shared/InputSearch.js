import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * InputSearch Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const InputSearch = ({ state, actions }) => {
  return (
    <InputSearchContainer>
      <div class="search__container">
        <input class="search__input" type="text" />
        <FontAwesomeIcon icon="search" color="white" className="search__icon" />
      </div>
    </InputSearchContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(InputSearch);

const InputSearchContainer = styled.div`
position: relative;
top: 8px;

& .search__icon {
  position: absolute;
  top: 25%;
  right: 18px;
}

& .search__title {
  font-size: 22px;
  font-weight: 900;
  text-align: center;
  color: #ff8b88;
}

& .search__input {
  width: 278px;
  padding: 9px 24px;

  background-color: transparent;
  // transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;

  color: white;
  background-color: transparent;

  border-radius: 50px;
  border: 2px solid white;
  // transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

& .search__input::placeholder {
    color: rgba(87, 87, 86, 0.8);
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

& .search__input:hover,
  .search__input:focus {
      outline: inherit;
  }

  & .searchButton i{
    color: #0052cc;
  }
`;
