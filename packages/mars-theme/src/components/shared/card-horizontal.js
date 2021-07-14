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
const CardHorizontal = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  const media = state.theme.featured.showOnPost ? state.source.attachment[item.featured_media] : null;
  const category = state.source.category[item.categories[0]];

  return (
    <CardContainer>
      <ImageLink href={item.link}>
        {media ?
          (<img src={media.source_url} alt={media.title.rendered} />) :
          (<img src="https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="img" />)}
      </ImageLink>
      <CardBody>
        <Subtitle href={category.link}>{category.name}</Subtitle>
        <Cardtitle>
          <a href={item.link}>{item.title.rendered}</a>
        </Cardtitle>
        <Cardfooter>
          <Author href={author.link}>{author.name}</Author>
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
export default connect(CardHorizontal);

const Subtitle = styled.a`
  font-size: 0.9em;
  text-transform: uppercase;
  color: hsla(219, 76%, 67%, 1);
  font-weight: 700;
  font-family: 'Merriweather';

  &:visited {
    color: hsla(219, 76%, 67%, 1);
  }
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
    max-width: 127px;
    min-width: 127px;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }
`;

const ImageLink = styled.a`
  // ImageLink
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
  height: 3.2em;
  overflow: hidden;
  margin-top: 6px;
  margin-bottom: 15px;

  & a {
    text-align: left;
    font: normal normal normal 20px/24px Rubik;
    font-weight: 400;
    letter-spacing: 0px;
    color: #2A3B5A;
    margin: 6px 0 28px;
  }

`;

const Author = styled.a`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);
  display: 0.9em;

  @media only screen and (min-width: 768px) {
    font-size: 1em;
  }
`;

const DateSpan = styled.span`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);
  display: none;

  @media only screen and (min-width: 768px) {
    font-size: 1em;
  }
`;