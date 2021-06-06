import React, { useEffect } from "react";
import { connect, styled } from "frontity";
/**
 * InputSearch Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const CardHorizontal = ({ state, actions }) => {
  return (
    <CardContainer>
      <img src="https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="img" />
      <CardBody>
        <Subtitle>Laravel</Subtitle>
        <Cardtitle>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel, ducimus eos unde obcaecati expedita enim perferendis, inventore mollitia, dicta sit fugit labore! Animi velit, nihil omnis illum aliquid obcaecati.</p>
        </Cardtitle>
        <Cardfooter>
          <Author>Sebastian Ramos</Author>
          <Date>Febrero, 21 2021</Date>
        </Cardfooter>
      </CardBody>
    </CardContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(CardHorizontal);

const Subtitle = styled.div`
  font-size: 0.9em;
  text-transform: uppercase;
  color: hsla(219, 76%, 67%, 1);
  font-weight: 700;
  font-family: 'Merriweather';
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 11px;
  padding: 21px 30px 11px 15px;
  width: 100%;
  height: 141px;
  max-height: 141px;
  overflow: hidden;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #7688AA40;
  border-radius: 16px;
  margin-bottom: 20px;

  img {
    width: 177px;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }
`;

const CardBody = styled.div`
  display: block;
  width: 100%;
`;

const Cardfooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7d8ca6;
`;

const Cardtitle = styled.div`
  height: 3.5em;
  overflow: hidden;
  margin-bottom: 19px;

  & p {
    text-align: left;
    font: normal normal normal 20px/24px Rubik;
    font-weight: 400;
    letter-spacing: 0px;
    color: #2A3B5A;
    margin: 6px 0 28px;
  }

`;

const Author = styled.span`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);
`;

const Date = styled.span`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);
`;