import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import lcon from "../assets1/screen3/connector.png";
import rbut from "../assets1/screen3/button-right.png";

const Div = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  transform: translate(-97%, -30%);
`;

const Div1 = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  transform: translate(-15%, -10%);
`;

const Div01 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px; /* Adjust the gap between Div and Div1 */
`;

const Div0 = styled.div`
  top: 120px;
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px; /* Adjust the gap between Div and Div1 */
`;

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  z-index: 5;
  // &:hover {
  //   color: ${(props) => props.theme.body};
  //   background-color: ${(props) => props.theme.text};
  //   transition: all 0.3s ease;
  // }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 50%;
  height: 100%;
  margin: 0 auto;
  left: 20px;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center;
  justify-content: center;
  align-items: center;
  // ${Box}:hover & {
  //   border: 1px solid ${(props) => props.theme.body};
  // }
`;
const Title = styled.h3`
  color: white;
  position: absolute;
  padding-top: 1rem;
  font-family: cinzel;
  font-size: 0.8em;
  max-width: 110px;
  align-items: center;
  transform: translate(13%, 10%);
`;

const Title1 = styled.h3`
  color: white;
  position: absolute;
  padding-top: 1rem;
  font-family: cinzel;
  font-size: 1em;
  align-items: center;
  transform: translate(100%, 950%);
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;
const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)`
  z-index:2
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, title, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Div1>
          <img src={lcon} width={150} />
        </Div1>
        <Div>
          <img src={rbut} width={200} />
          <Title>{name}</Title>
        </Div>
        <Image img={imgSrc} />
        <Title1>{title}</Title1>
        {/* <Title>{name}</Title> */}
      </Box>
    </Container>
  );
};

export default BlogComponent;
