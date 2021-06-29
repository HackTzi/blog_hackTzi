import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import Card from "../shared/card";
import CardHorizontal from "../shared/card-horizontal";
import CardHorizontalMini from "../shared/card-horizontal-mini";
import LoadingSpinner from "../shared/loading-spinner";
import Projects from "../projects/projects";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const latestPosts = state.source.get('/');

  // console.log(decode(state.source));

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
      <Projects />
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
  );
};

export default connect(List);

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

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
