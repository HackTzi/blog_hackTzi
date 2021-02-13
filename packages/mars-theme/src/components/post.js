import React, { useEffect } from "react";
import { connect, css, Global, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  console.log(data);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  console.log(post);
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

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
    <Card>
      <img src="https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="img" />
      <Subtitle>Sebastian Ramos / Freepik / Reflex</Subtitle>
      <Cardtitle>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</Cardtitle>
      <Cardfooter>Sebastian Ramos</Cardfooter>
    </Card>
  ))

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Postcontainer>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        `}
      />
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}
      <SocialMedia>
        <p>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACgoKDFxcW9vb1FRUU/Pz8EBAT7+/sLCwsqKio6OjpCQkJhYWE0NDQeHh5TU1N1dXVtbW1ZWVlMTExvb28WFhbw8PBeXl4bGxvn5+eUlJSpqamdnZ1oaGjV1dWJiYmBgYEtLS3e3t60tLQlJSXMzMyLi4vfvChgAAAEP0lEQVR4nO3dC0+jQBSGYWirULXam1J7UWu9/P9/uFSNKykWzuk435nhe5PdZLObzTyhBYRhSBKf5ftfef71h2LXf1mv172mNn2vgzytT1yxe3l/uBqmbduCRy2r6D/Nbz4HnmVp9vH7d1kNr/z7gITLzVnrDRfYNtx/94r1uYYXiLDcfNvh/hNX9zmMQlhs0+o3LjZhT0n7KEsn6PE3tZufAgxAuN4PUvsBtS38PLw/fQ9U3S0Y8nvlMSJf6GEBCEviOB2esPG+mqIdR1roDxHmhR9fwtvTdfse0Jj6SuLGDdCqMEneTtqBmhfmeXHvhGdW+P9AeHojNKW+R1e+zKpw5Epocxvm7jZh2QLNqW3kaD9qVJgnS2e8shnac1ierBxuQovCJLlz57MpdLmfsSlcRS9UXfgNSeh0T5qmY7TnsH70QrdfQ4tClyc0JoW59hZMMMLC1Q/3ZoWOd6UGhX23m9CgcO3UZ1GouYp4bKvbE8oOh803hq/QoIOEV9lK4Plq8LjM0eNu31a0p8nS64YpQfboE9nx8HWJHrC4qUw4QI9XnuxSaYYeriLZfV+bdwePNxYJN+jhKpLNLgnwa5jIfnh6Qw9X0aVIuEMPV9F19MLn9rzyuBne8T5JXkXCAj1cRfELb9oLUwptJhPa+9moOdlEmhCFstujIQrbPw3TDSF6tJoo7JQwo9BmFFZDj1aTSDhEj1aTSHiHHq0mCivdNP1vFs/qRGfejUKLRJHwAj3aYy0H/dpEn9LX+v/jZ7hrxo6nr/3aWfRC3N0pX0Lc3Sk/wix9iVyYpri1TXwJ49+X4u7d+BLirop7EgLPzT0Jn6MXzqMXApdU8CR8j14InFLkSYg7afMlBC5I50n4GL0QOOHGkxB4JcqTEHixzY/wHubzJQSetHkSIlfF8CNErinoR7iKXtiLXoic6e5HiJzp7keInJ1JoZPuohde5rGfl86Qd7k9CDPso21/L0QvyF67soBwzeDj/7gUQh/eq9+GbtdTwD68N3BCODtoPp+Px7PFaDrZvq+hj2MsB/UJnkbIwpz1JXqihEKTUdgxIfJioTqRsHn2pcEopNB+FIYvFDytTqHRLiik0HwUVjL9zMxviYTA2aP6KKTQfhSGLxStZkahySik0H4UVrpGj1aTSHiJHq0mCim0X/xC0TrCFJpMtNo1hSajsGPCc/RoNYmE9l6T0yIKKbQfheELRW+SDVIoes8MhSaL/1NKYSXcso8nJBIiFxRQRyGF9hMdD4MUit4OSKHJKKTQfiKhvZdut4jC8IUzCik0H4UdE87Qo9VEYaUFerSa4heOKKTQfBRSaD8KKyEXQlYXv/CBQgrNRyGF9hMJH9Cj1SQSQlfR1TaVCIFv5NJ3G/02pJBC+1HYMWGQR4sJhT+boEerqQtCwdr6FJqsC8LWZbELs0C3YfxH/MGm17rNX7+D5B8u7Fk1PEvttAAAAABJRU5ErkJggg==" alt="Facebook" />
        </p>
        <p>
          <img src="data:image/png;base64,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" alt="Twitter" />
        </p>
        <p>
          <img src="https://image.flaticon.com/icons/png/512/48/48899.png" alt="Pinterest" />
        </p>
        <p>
          <img src="data:image/png;base64,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" alt="Linkedin" />
        </p>
      </SocialMedia>

      <Container>
        <div>

          <Tag>WordPress</Tag>

          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

          {/* Only display author and date on posts */}
          {data.isPost && (
            <div>
              {author && (
                <StyledLink link={author.link}>
                  <Author>
                    Por: <b>{author.name}</b>
                  </Author>
                </StyledLink>
              )}
            </div>
          )}
        </div>

        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      </Container>
      <FooterPost>
        <Title>También te podría interesar</Title>
        <Divider></Divider>
        <Cards>
          {cards}
        </Cards>
      </FooterPost>
    </Postcontainer>
  ) : null;
};

export default connect(Post);

const SocialMedia = styled.div`
    position: absolute;
    z-index: 1;
    top: 450px;
    left: -10px;

    img {
      height: 25px;
    }
`;

const Cardfooter = styled.span`
  color: #7d8ca6;
`;

const Cardtitle = styled.h2`
  text-align: left;
  font: normal normal normal 20px/24px Rubik;
  font-weight: bold;
  letter-spacing: 0px;
  color: #2A3B5A;
`;

const Subtitle = styled.div`
  font-size: 0.6em;
  text-align: right;
  color: #7d8ca6;
`;

const Cards = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 50px;
`;

const Card = styled.div`
  padding: 18px;
  width: 295px;
  height: 288px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #7688AA40;
  border-radius: 16px;

  img {
    width: 100%;
    height: 150px;
    border-radius: 16px;
    object-fit: cover;
    object-position: center;
  }
`;

const FooterPost = styled.div`
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  border: 1px solid #DD1C1A;
  margin-bottom: 38px;
`;

const Postcontainer = styled.div`
  background-color: white;
  position: relative;
  margin-top: 63px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 752px;
  margin: 0;
  padding: 13px 16px;;
  position: relative;
  top: -70px;
  background: white;
  border-radius: 18px;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: #2A3B5A;
  letter-spacing: 0px;
  font: normal bold 31px/37px Rubik;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
  margin-bottom: 47px;
  display: block;
`;

const Author = styled.p`
  color: #516384;
  font-size: 1.1em;
  display: inline;
`;

const Tag = styled.h2`
  margin-top: 0;
  color: #6C99EB;
  font: normal normal 100 25px/29px Rubik;
  letter-spacing: 0px;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: #707070;
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
