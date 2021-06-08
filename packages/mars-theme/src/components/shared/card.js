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
const Card = ({ state, item }) => {
  const author = state.source.author[item.author];
  const media = state.theme.featured.showOnPost ? state.source.attachment[item.featured_media] : null;

  return (
    <CardContainer>
      <ImageLink href={item.link}>
        {media ?
          (<img src={media.source_url} alt={media.title.rendered} />) :
          (<img src="https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="img" />)}
      </ImageLink>
      <Subtitle theme={state}>{author.name} / Freepik / Reflex</Subtitle>
      <Cardtitle theme={state}>
        <a href={item.link}>{item.title.rendered}</a>
      </Cardtitle>
      <Cardfooter href={author.link} theme={state}>{author.name}</Cardfooter>
    </CardContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Card);

const ImageLink = styled.a`
  // ImageLink
`;

const Subtitle = styled.div`
  font-size: 0.6em;
  text-align: right;
  color: #7d8ca6;
`;

const CardContainer = styled.div`
  box-sizing: border-box;
  padding: 16px 18px 13px;
  width: 100%;
  min-height: 270px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #7688AA40;
  border-radius: 16px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 150px;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }
`;

const Cardfooter = styled.a`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);

  &:visited {
    color: hsla(219, 23%, 56%, 1);
  }
`;

const Cardtitle = styled.div`
  max-height: 4.6em;
  min-height: 1.6em;
  overflow: hidden;
  margin-top: 6px;
  margin-bottom: 11px;

  & a,
  &:visited {
    text-align: left;
    font: normal normal normal 20px/24px Rubik;
    font-weight: 400;
    letter-spacing: 0px;
    color: #2A3B5A;
  }
`;