import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import blue from "../assets1/screen4/blue.png";
import black from "../assets1/screen4/black.png";
import orange from "../assets1/screen4/orange.png";
import green from "../assets1/screen4/green.png";
import red from "../assets1/screen4/red.png";
import spaceship from "../assets1/spaceship.svg";
import bg from "../assets1/screen4/bg.jpg";
import {motion} from "framer-motion"
import button from "../assets1/screen4/button.png";



const Image = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url(${(props) => props.bg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`

  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Div0 = styled.div`
  top: 120px;
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px; /* Adjust the gap between Div and Div1 */
`;
const Div01 = styled.div`

  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px; /* Adjust the gap between Div and Div1 */
`;

const Div = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px; /* Adjust the gap between Div and Div1 */
`;

const Div1 = styled.div`
  position: absolute;
  width: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px; 
  gap-x: 10;
`;


const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ThemeProvider theme={lightTheme}>
        <Box>
          <Image bg={bg}></Image>
          <Div0>
            <img src={button} width={250} />
            <Div01 style={{fontFamily:"cinzel"}}>Our Stars</Div01> 
          </Div0>
          <Div>
            <img src={spaceship} width={550} />
          </Div>
          <Div1>
            <img width={150} style={{ marginRight: "30px" }} src={blue} />
            <img width={150} style={{ marginRight: "30px" }} src={black} />
            <img width={150} style={{ marginRight: "30px" }} src={orange} />
            <img width={150} style={{ marginRight: "30px" }} src={green} />
            <img width={150} style={{ marginRight: "30px" }} src={red} />
          </Div1>
          <PowerButton />
          <ParticleComponent theme="light" />
          <BigTitle text="SKILLS" top="80%" right="30%" />
        </Box>
      </ThemeProvider>
    </motion.div>
  );
};

export default MySkillsPage;
