import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import dateFormat from "../utilities/date-format";
/**
 * InputSearch Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const CardHorizontalMini = ({ state, item }) => {
  const date = new Date(item.date);

  return (
    <CardContainer>
      <CardBody>
        <Cardtitle>
          <a href={item.link}>{item.title.rendered}</a>
        </Cardtitle>
        <Cardfooter>
          {/* <Author>Sebastian Ramos</Author> */}
          <DateSpan>{dateFormat(date)}</DateSpan>
        </Cardfooter>
      </CardBody>
    </CardContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(CardHorizontalMini);

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
  padding: 5px 8px 11px 19px;
  width: 100%;
  height: 87px;
  max-height: 108px;
  overflow: hidden;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #7688AA40;
  border-radius: 16px;
  margin-bottom: 20px;
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
  max-height: 3.1em;
  min-height: 3.1em;
  overflow: hidden;
  margin-bottom: 6px;

  & a {
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

const DateSpan = styled.span`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);
`;