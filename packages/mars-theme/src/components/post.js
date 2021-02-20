import React, { useEffect } from "react";
import { connect, css, Global, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);
  const { mode } = state.theme;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  const cards = [1, 2, 3].map(() => (
    <Card theme={mode}>
      <img src="https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="img" />
      <Subtitle theme={mode}>Sebastian Ramos / Freepik / Reflex</Subtitle>
      <Cardtitle theme={mode}>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</Cardtitle>
      <Cardfooter theme={mode}>Sebastian Ramos</Cardfooter>
    </Card>
  ))

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Postcontainer>
      <Global
        styles={css`
          :root {
            --black-text: #1C283E;
            --white-text: #F8F9FB;
            --white-text-darken-1: #ECEDF0;
            --white-text-darken-2: #F2F6FD;
            --blue-grey: #7688AA;
          }
          @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          * {
            box-sizing: border-box;
          }
        `}
      />
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}
      <SocialMedia>
        <p css={css`text-align: center;`}>
          <img css={mode === 'light' ? '' : css`filter: invert(1);`} src="https://icon-library.com/images/facebook-icon-black-transparent/facebook-icon-black-transparent-11.jpg" alt="Facebook" />
        </p>
        <p css={css`text-align: center;`}>
          <img css={mode === 'light' ? '' : css`filter: invert(1);`} src="https://icon-library.com/images/twitter-icon-black-transparent/twitter-icon-black-transparent-12.jpg" alt="Twitter" />
        </p>
        <p css={css`text-align: center;`}>
          <img css={mode === 'light' ? '' : css`filter: invert(1);`} src="https://image.flaticon.com/icons/png/512/48/48899.png" alt="Pinterest" />
        </p>
        <p css={css`text-align: center;`}>
          <img css={mode === 'light' ? '' : css`filter: invert(1);`} src="https://i.pinimg.com/originals/ac/df/8b/acdf8be404c98247fcd1e442bc795dd8.png" alt="Linkedin" />
        </p>
      </SocialMedia>

      <Container theme={mode}>
        <Headerpost>
          <Tag>WordPress</Tag>

          <Title theme={mode} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

          {/* Only display author and date on posts */}
          {data.isPost && (
            <div>
              {author && (
                <StyledLink link={author.link}>
                  <Author theme={mode}>
                    Por: <b>{author.name}</b>
                  </Author>
                </StyledLink>
              )}
            </div>
          )}
        </Headerpost>

        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <Content theme={mode}>
          <Html2React html={post.content.rendered} />
        </Content>
      </Container>
      <FooterPost>
        <FooterTitle theme={mode}>También te podría interesar</FooterTitle>
        <Divider></Divider>
        <Cards>
          {cards}
        </Cards>
      </FooterPost>
    </Postcontainer>
  ) : null;
};

export default connect(Post);

const Headerpost = styled.div`
  padding: 0 16px;
`;

const SocialMedia = styled.div`
    display: none;

    @media only screen and (min-width: 576px) {
      display: block;
      position: absolute;
      z-index: 1;
      top: 450px;
      left: 14px;

      img {
        height: 25px;
      }
    }
    @media only screen and (min-width: 768px) {
      display: block;
      left: 15px;
    }
    @media only screen and (min-width: 992px) {
      display: block;
      left: -20px;
    }
`;

const Cardfooter = styled.span`
  // color: #7d8ca6;
  color: ${props => props.theme === 'light' ? '#7d8ca6' : "var(--blue-grey)"};
`;

const Cardtitle = styled.h2`
  text-align: left;
  font: normal normal normal 20px/24px Rubik;
  font-weight: bold;
  letter-spacing: 0px;
  // color: #2A3B5A;
  color: ${props => props.theme === 'light' ? '#2A3B5A' : "var(--white-text-darken-2)"};
`;

const Subtitle = styled.div`
  font-size: 0.6em;
  text-align: right;
  // color: #7d8ca6;
  color: ${props => props.theme === 'light' ? '#7d8ca6' : "var(--white-text-darken-1)"};
`;

const Cards = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 50px;
`;

const Card = styled.div`
  padding: 18px;
  width: 85%;
  height: auto;
  // background: #FFFFFF 0% 0% no-repeat padding-box;
  background: ${props => props.theme === 'light' ? '#FFFFFF' : "#162035"} 0% 0% no-repeat padding-box;
  // box-shadow: 0px 3px 6px #7688AA40;
  box-shadow: 0px 3px 6px ${props => props.theme === 'light' ? '#7688AA40' : "#0D1B36"};
  border-radius: 16px;

  img {
    width: 100%;
    height: 150px;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }

  @media only screen and (min-width: 576px) {
    width: 45%;
  }

  @media only screen and (min-width: 768px) {
    width: 30%;
  }
`;

const FooterPost = styled.div`
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  border: 0.5px solid #DD1C1A;
  margin-bottom: 38px;
`;

const Postcontainer = styled.div`
  width: 95vw;
  position: relative;
  margin: 40px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media only screen and (min-width: 576px) {
    width: 900px;
    margin-left: 0;
    margin-right: 0;
    margin-top: 63px;
  }
`;

const Container = styled.div`
  max-width: 88vw;
  margin: 0 20px;
  padding: 32px 0;
  position: relative;
  top: -30px;
  background: ${props => props.theme === 'light' ? 'white' : "#1C283E"};
  border-radius: 18px;
  
  @media only screen and (min-width: 576px) {
    width: 752px;
    top: -70px;
    margin: 0;
    padding: 13px 16px;;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  // color: var(--black-text);
  color: ${props => props.theme === 'light' ? 'var(--black-text)' : "var(--white-text)"};
  font-size: 24px;
  line-height: 28px;

  @media only screen and (min-width: 576px) {
    font: normal bold 31px/37px Rubik;
  }
`;
const FooterTitle = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: ${props => props.theme === 'light' ? 'var(--black-text)' : "var(--white-text-darken-2)"};
  font-size: 28px;
  line-height: 30px;
  font-weight: 800;

  @media only screen and (min-width: 576px) {
    font: normal bold 31px/37px Rubik;
  }
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
  margin-bottom: 47px;
  display: block;
`;

const Author = styled.p`
  // color: #516384;
  color: ${props => props.theme === 'light' ? '#516384' : "#ECEDF0"};
  font-size: 1em;
  display: inline;
  
  @media only screen and (min-width: 576px) {
    font-size: 1.1em;
  }
`;

const Tag = styled.h2`
  margin-top: 0;
  color: #6C99EB;
  font: normal normal 300 14px/17px Rubik;
  letter-spacing: 0px;
  
  @media only screen and (min-width: 576px) {
    font: normal normal 100 25px/29px Rubik;
  }

`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  // color: #707070;
  color: ${props => props.theme === 'light' ? '#707070' : "var(--white-text-darken-1)"};
  word-break: break-word;
  font-family: 'Rubik';
  font-weight: 100;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
    font-size: 1.1em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 17px;
  }

  figure {
    margin: 60px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
