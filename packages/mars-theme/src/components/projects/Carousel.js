import React, { useState, useEffect } from "react";
import { connect, css, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'; // aqui se importan los iconos
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'; // aqui se importan los iconos
import anime from 'animejs';

const Carousel = ({ state }) => {
  const [counter, setCounter] = useState(0);
  let x = 266;
  let cardList = [
    {
      src: 'https://images.unsplash.com/photo-1613140952277-1c6bd0386ff5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      link: '#mac',
      alt: 'card 1',
      title: 'Tienda Platzi'
    },
    {
      src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      link: '#linux',
      alt: 'card 2',
      title: 'Blog Hacktzi'
    },
    {
      src: 'https://images.unsplash.com/photo-1606787620651-3f8e15e00662?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      link: '#windows',
      alt: 'card 3',
      title: 'Food Hacktzi'
    },
    {
      src: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80',
      link: '#linux',
      alt: 'card 2',
      title: 'Hacktzi Reviews'
    },
    {
      src: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
      link: '#windows',
      alt: 'card 3',
      title: 'Hacktzi Space'
    }
  ];

  useEffect(() => {
    if (counter < 0) return setCounter(cardList.length - 1);
    if (counter >= cardList.length) return setCounter(0);
    move();
  }, [counter])

  const move = () => {
    anime({
      targets: '.card__image',
      translateX: -(x * counter),
      easing: 'easeInOutExpo'
    });
  }

  return (
    <Container>
      <CarouselBody>
        <CarouselButtons>
          <CircleButton onClick={() => setCounter(counter - 1)}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} className="arrow_icon" />
          </CircleButton>
          <CircleButton onClick={() => setCounter(counter + 1)}>
            <FontAwesomeIcon icon={faLongArrowAltRight} className="arrow_icon" />
          </CircleButton>
        </CarouselButtons>
        <CarouselCards>
          {cardList.map((card, i) => (
            <CardLink key={i} href={card.link} className="card__image">
              <CardImage src={card.src} alt={card.alt} />
              <CardGradient></CardGradient>
              <CardTitle>{card.title}</CardTitle>
            </CardLink>
          ))}
        </CarouselCards>
        <CarouselTicks>
          {cardList.map((_, i) => (
            <div key={i}
              css={i === counter ? css`background-color: hsla(219, 36%, 26%, 1) !important;` : ``}
              onClick={() => {
                setCounter(i);
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
  align-items: center;

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const CardImage = styled.img`
  min-height: 229px;
  max-height: 229px;
  min-width: 255px;
  max-width: 255px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  position: relative;
`;

const CarouselBody = styled.div`
width: 800px;

@media only screen and (max-width: 767px) {
  width: 100%;
}
`;

const CarouselButtons = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  padding-right: 10px;
`;

const CarouselCards = styled.div/*css*/`
  display: inline-flex;
  max-width: 800px;
  overflow-x: hidden;
  margin-bottom: 30px;

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CarouselTicks = styled.div/*css*/`
  display: flex;
  align-items: center;
  justify-content: center;

  & div {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: hsla(219, 34%, 80%, 1);
    margin-right: 8px;
    cursor: pointer;
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
  border-color: hsla(219, 36%, 26%, 1) !important;
`;

const CardGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98%;
  background: rgb(196,196,196);
  background: linear-gradient(180deg, rgba(196,196,196,0) 50%, rgba(12,12,12,0.3984944319524685) 100%);
  border-radius: 16px;
`;

const CardTitle = styled.span`
  position: absolute;
  bottom: 15px;
  left: 20px;
  color: white;
  font-weight: 500;
`;

const CardLink = styled.a`
  margin-right: 20px;
`;