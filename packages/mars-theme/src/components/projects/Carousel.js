import React, { useEffect } from "react";
import { connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'; // aqui se importan los iconos
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'; // aqui se importan los iconos
import anime from 'animejs';

const Carousel = ({ state }) => {
  console.log('📦 anime', anime);

  let cardList = [
    {
      src: 'https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      link: '#mac',
      alt: 'card 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '#linux',
      alt: 'card 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1606787620651-3f8e15e00662?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      link: '#windows',
      alt: 'card 3'
    },
  ];
  let x = 266;
  let counter = 0;

  const calcX = (direction = 'left') => {
    if (direction === 'left') {
      counter--;
      if (counter < 0) counter = cardList.length - 1;
      console.log('➖', counter, x * counter);
    }
    if (direction === 'right') {
      counter++;
      if (counter >= cardList.length) counter = 0;
      console.log('➕', counter, -(x * counter));
    }
    return -(x * counter);

  }

  const moveLeft = () => {
    anime({
      targets: '.card__image',
      translateX: calcX('left'),
      easing: 'easeInOutExpo'
    });
  }

  const moveRight = () => {
    anime({
      targets: '.card__image',
      translateX: calcX('right'),
      easing: 'easeInOutExpo'
    });
  }
  return (
    <Container>
      <CarouselBody>
        <CarouselButtons>
          <CircleButton onClick={moveLeft}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow_icon" />
          </CircleButton>
          <CircleButton onClick={moveRight}>
            <FontAwesomeIcon icon={faLongArrowAltRight} className="arrow_icon" />
          </CircleButton>
        </CarouselButtons>
        <CarouselCards>
          {cardList.map((card, i) => (
            <a key={i} href={card.link} className="card__image">
              <CardImage src={card.src} alt={card.alt} />
            </a>
          ))}
        </CarouselCards>
        <CarouselTicks counter={counter}>
          {cardList.map((_, i) => (
            <div key={i}
              css={i === counter ? css`background-color: hsla(219, 36%, 26%, 1) !important;` : ``}
              onClick={() => {
                counter = i - 1;
                console.log('💔 e3', counter);
                moveRight();
              }}></div>
          ))}
        </CarouselTicks>
      </CarouselBody>
    </Container>
  );
};

export default connect(Carousel);

const Container = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: flex-end;
`;

const CardImage = styled.img`
  min-height: 229px;
  max-height: 229px;
  min-width: 255px;
  max-width: 255px;
  margin-right: 20px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
`;

const CarouselBody = styled.div`
width: 320px;
`;
const CarouselButtons = styled.div`
display: flex;
margin-bottom: 15px;
justify-content: flex-end;
padding-right: 10px;
`;
const CarouselCards = styled.div/*css*/`
display: inline-flex;
max-width: 320px;
// overflow-x: scroll;
overflow-x: hidden;
margin-bottom: 50px;

::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

::-webkit-scrollbar-thumb {
	background: #ccc;
	border-radius: 4px;
}

::-webkit-scrollbar-thumb:active,
::-webkit-scrollbar-thumb:hover {
	background: #919193;
}
`;
const CarouselTicks = styled.div/*css*/`
  display: flex;
  align-items: center;
  justify-content: center;
  & div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: hsla(219, 34%, 80%, 1);
    margin-right: 5px;
    cursor: pointer;
  }
  & div:nth-child(${props => props.counter}) {
    background-color: hsla(219, 36%, 26%, 1);
  }
`;
const CircleButton = styled.div`
  border: 1px solid black;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`;