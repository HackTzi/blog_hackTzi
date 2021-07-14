import React, { useEffect } from "react";
import { connect, css, styled } from "frontity";
import CardHorizontalSimple from "./card-horizontal-simple";
import CardBigPicture from "./card-big-picture";
/**
 * InputSearch Component
 *
 * It's used to allow the user to paginate between a list of posts.
 *
 * The `state`, `actions`, `libraries` props are provided by the global context,
 * when we wrap this component in `connect(...)`
 */
const Hero = ({ state, posts }) => {

  console.log('🎈 Hero', posts.items);
  const firstItem = posts.items[0];
  const firstMedia = state.theme.featured.showOnPost ? state.source.attachment[firstItem.featured_media] : null;

  return (
    <HeroContainer>
      <CardBigPicture item={firstItem} />
      <Cards>
        {
          posts.items.slice(1, 5).map(({ type, id }, i) => {
            const item = state.source[type][id];
            return <CardHorizontalSimple item={item} key={item.id} hasBorder={i < posts.items.slice(1, 5).length - 1} />;
          })
        }
      </Cards>
    </HeroContainer>
  );
};

/**
 * Connect Pagination to global context to give it access to
 * `state`, `actions`, `libraries` via props
 */
export default connect(Hero);

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
`;