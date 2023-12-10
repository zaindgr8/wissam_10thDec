import { motion } from 'framer-motion';
import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';
import br from "../assets1/screen3/button-right.png";
import rcon from "../assets1/screen3/right-con.png";
import bl from "../assets1/screen3/button.png";
import lcon from "../assets1/screen3/connector.png";



const Box = styled(motion.li)`
width: 16rem;
height: 30vh;
// background-color: ${props => props.theme.text};
color:${props => props.theme.body};
padding: 1.5rem 2rem;
margin-right: 10rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
// border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
// background-color: ${props => props.theme.body};
// color:${props => props.theme.text};
// border: 1px solid ${props => props.theme.text};

}
`
const Title = styled.h2`
  position: absolute;
  color: white;
  font-size: 1em;
`;

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
`

const Image = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Div = styled.div`
  
`;
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.body};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.text};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`

const Link = styled.a`
background-color: ${props =>props.theme.body};
color: ${props =>props.theme.text};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props =>props.theme.text};
    color: ${props =>props.theme.body};

}
`

const Div01 = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px; /* Adjust the gap between Div and Div1 */
`;
const Div0 = styled.div`
  top: 40px;
  transform: translate(-130%, 0%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
`;

const Div1 = styled.div`
  top: 20px;
  transform: translate(-42%, 0%);
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
`;

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:5,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

  const { id, name, description, image, tags, demo, github } = props.data;

    return (
      <Box>
        <Div0>
          <img src={bl} width={150} />
          {/* <Div01 style={{ fontFamily: "cinzel" }}>Our Stars</Div01> */}
          <Title>{name}</Title>
        </Div0>
        <Div1>
          <img src={lcon} width={150} />
        </Div1>
        <Image>
          <img src={image} alt={name} width={200} />
        </Image>
        <Footer>
          <Link
            href="https://buy.stripe.com/dR6eYVeXP0nZ3C0000"
            target="_blank"
          >
            Buy Now
          </Link>
        </Footer>
      </Box>
    );
}

export default Card
