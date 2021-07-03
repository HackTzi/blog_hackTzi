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
const CardBigPicture = ({ state, item }) => {
  console.log('🎡 state', state);
  console.log('🎡 item', item);

  const post = state.source.post[item.id];
  const author = state.source.author[post.author];
  const date = new Date(post.date);
  const media = state.theme.featured.showOnPost ? state.source.attachment[post.featured_media] : null;
  const category = state.source.category[post.categories[0]];

  return (
    <CardContainer>
      <ImageLink>
        {media ?
          (<img src={media.source_url} alt={media.title.rendered} />) :
          (<img src="https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="img" />)}
        <CardGradientLink href={post.link} />
      </ImageLink>
      <CardBody>
        <Subtitle href={post.link}>{post.title.rendered}</Subtitle>
        <Cardtitle>
          <a href={post.link}>
            {post.excerpt && (
              <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            )}
          </a>
        </Cardtitle>
        <Cardfooter>
          <Author href={author.link}>Por: {author.name}</Author>
        </Cardfooter>
      </CardBody>
    </CardContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(CardBigPicture);

const CardContainer = styled.div`
  position: relative;
`;

const ImageLink = styled.a`
  position: relative;
  & img {
    max-height: 590px;
    max-width: 710px;
    width: 710px;
    height: 590px;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;

    @media only screen and (max-width: 768px) {
      max-height: 350px;
      max-width: 100%;
      width: 100%;
    }
  }
`;

const CardBody = styled.div`
  display: block;
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 20px;
  max-width: 670px;
  
  @media only screen and (max-width: 768px) {
    width: 75vw;
    bottom: 20px;
  }
`;
const Subtitle = styled.a`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: #2A3B5A;
  font-weight: normal;
  font-family: 'Rubik';
  background: white;
  padding: 5px 20px 0 0;
  box-shadow: 10px 0 0 #fff, -10px 0 0 #fff;
  position: relative;
  left: 10px;

  &:visited {
    color: #2A3B5A;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Cardtitle = styled.div`
max-height: 4rem;
overflow: hidden;
margin-top: 6px;
margin-bottom: 10px;
background: white;
display: block;
padding: 5px 10px;
position: relative;
top: -7px;
width: fit-content;

& a {
  text-align: left;
  font: normal normal normal 20px/24px Rubik;
  font-weight: 400;
  letter-spacing: 0px;
  color: #2A3B5A;
  margin: 6px 0 28px;
}

@media only screen and (max-width: 768px) {
  width: 100%;
}
`;
const Cardfooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: #7d8ca6;
`;

const Author = styled.a`
  font-family: 'Merriweather';
  font-weight: 400;
  color: hsla(219, 23%, 56%, 1);
  display: 0.9em;
  background: white;
  padding: 5px 10px;

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Excerpt = styled.div`
  line-height: 1.4em;
  color: rgba(12, 17, 43, 0.8);

  & p {
    padding: 0;
    margin: 0;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const CardGradientLink = styled.a`
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 590px;
  background: linear-gradient(
  180deg
  , rgba(196,196,196,0) 50%, rgba(12,12,12,0.3984944319524685) 100%);
  border-radius: 16px;
`;