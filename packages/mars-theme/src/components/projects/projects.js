import React from "react";
import { connect, styled } from "frontity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'; // aqui se importan los iconos
import Carousel from "./Carousel";

const Projects = ({ state }) => {
  return (
    <ProjectsContainer>
      <HeaderTitle>Proyectos</HeaderTitle>
      <ProjectBody>
        <ProjectsLeft>
          <Title>Nuestros proyectos</Title>
          <Subtitle>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam laborum debitis minima magnam repellat libero error, recusandae, blanditiis culpa quod molestiae repudiandae, distinctio maiores nobis dolor? Voluptate non harum voluptas.</Subtitle>
          <MoreProjects href='#algunapaginaporalli'>
            Más proyectos <FontAwesomeIcon icon={faLongArrowAltRight} className="arrow_icon" />
          </MoreProjects>
        </ProjectsLeft>
        <Carousel />
      </ProjectBody>
    </ProjectsContainer>
  );
};

export default connect(Projects);

const ProjectsContainer = styled.section`
  width: 100%;
  margin-top: 50px;
  min-height: 489px;
  background-color: #F4F4F4;
  box-shadow: 0px 3px 6px #7688AA40;
  position: relative;
`;

const HeaderTitle = styled.div`
font-weight: 700;
font-size: 1.75rem;
width: 219px;
height: 55px;
background-color: hsla(50, 94%, 49%, 1);
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: 50px;
top: -27px;
`;
const ProjectsLeft = styled.div`
max-width: 300px;
padding: 90px;
`;
const Title = styled.h2`
color: hsla(219, 36%, 26%, 1);
`;
const Subtitle = styled.p`
color: hsla(219, 23%, 56%, 1);
`;
const MoreProjects = styled.a`
color: hsla(219, 36%, 26%, 1);
display: flex;
align-items: center;
font-weigth: 300;
font-size: 0.9rem;

& .arrow_icon {
  margin-left: 10px;
}
`;
const ProjectBody = styled.div`
  display: inline-flex;
`;