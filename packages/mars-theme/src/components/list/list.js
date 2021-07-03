import React from "react";
import { connect, styled, decode, css } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Card from "../shared/card";
import CardHorizontal from "../shared/card-horizontal";
import CardHorizontalMini from "../shared/card-horizontal-mini";
import LoadingSpinner from "../shared/loading-spinner";
import Projects from "../projects/projects";
import AboutImage from "../../assets/Icons/aboutus.svg";
import RigthArrow from "../../assets/Icons/rightarrow.svg";
import Hero from "../shared/Hero";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const latestPosts = state.source.get("/");

  // console.log(decode(state.source));

  return (
    <>
      <MiniContainer css={css`margin-top: 60px;`}>
        <Hero posts={latestPosts} />
        <Projects />
      </MiniContainer>
      <Container>
        <SeeMore>
          <TopPosts>
            <TopPostsTitle>Importante</TopPostsTitle>
            {
              latestPosts.items ? latestPosts.items.slice(0, 4).map(({ type, id }, i) => {
              const item = state.source[type][id];
              console.log('🧡 item', item);
              // Render one Item component for each one.
              if (i === 0) return <Card key={item.id} item={item} />
              return <CardHorizontalMini key={item.id} item={item} />;
              }) :
                (
                  <CenterDiv>
                    <LoadingSpinner />
                  </CenterDiv>
                )
            }
          </TopPosts>
          <LastPosts>
            <LastPostsTitle>Últimas noticias <SeeMoreLink href="/page/2/">Ver más</SeeMoreLink></LastPostsTitle>
            {
              latestPosts.items ? latestPosts.items.slice(0, 4).map(({ type, id }) => {
                const item = state.source[type][id];
                // Render one Item component for each one.
                return <CardHorizontal key={item.id} item={item} />;
              }) :
                (
                  <CenterDiv>
                    <LoadingSpinner />
                  </CenterDiv>
                )
            }
          </LastPosts>
        </SeeMore>
      </Container>
      <MiniContainer>
        <AboutUs>
          <div className="about__info">
            <h3>Documentacion de la comunidad</h3>
            <p>
              Si quieres colaborar con nosotros en nuestros proyectos te
              recomendamos que les nuestra documentación para que estés en
              sintonía con nuestra comunidad. ¡Te esperamos!
            </p>
            <a>
              Ver <span className="right-arrow"></span>
            </a>
          </div>
          <div className="about__image">
            <img src={AboutImage} />
          </div>
        </AboutUs>
      </MiniContainer>
    </>
  );
};

export default connect(List);

const MiniContainer = styled.div`
  max-width: 1280px;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SeeMore = styled.div`
  display: block;
  margin-bottom: 50px;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: [xi] 257px [x2] 1fr [xf];
    column-gap: 18px;
  }
`;

const TopPosts = styled.div`
  grid-column: xi / x2;
  // height: 100px;
`;

const LastPosts = styled.div`
  grid-column: x2 / xf;
  // height: 100px;
`;

const TopPostsTitle = styled.h1`
  border-bottom: 2px solid red;
  padding-bottom: 5px;
  font-size: 2em;
  font-weight: 400;
`;

const LastPostsTitle = styled.h1`
  border-bottom: 2px solid red;
  padding-bottom: 5px;
  font-size: 2em;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SeeMoreLink = styled.a`
  font-size: 0.34em;
  text-transform: uppercase;
  color: red !important;
`;
const AboutUs = styled.div`
  box-sizing: border-box;
  margin-block: 229px;
  width: 1258px;
  max-height: 337px;
  display: flex;
  justifi-content: space-between;
  background-color: #f4f4f4;

  .about__info {
    max-width: calc(1258px - 458px);
    padding: 60px 105px;
  }
  .about__info a {
    display: inline-block;
    align-items: center;
    transform: scale(1, 1);
    transition: transform 0.5s;
  }
  .about__info a:hover {
    transform: scale(1.2, 1.2);
    cursor: pointer;
    opacity: .5;
  }
  .about__info a .right-arrow {
    display: inline-block;
    margin-inline-start: 10px;
    width: 30px;
    height: 14px;
    background-image: url(${RigthArrow});
    vertical-align: middle;
    background-position: center;
    background-size; cover;
  }
  .about__image {
    max-width: 458px;
    display: flex;
    align-items: flex-end;
    background-color: #f0c808;
  }
  .about__image img {
    width: 456px;
    height: 427px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
