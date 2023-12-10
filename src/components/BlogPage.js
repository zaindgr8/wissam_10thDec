import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import spaceship from "../assets1/spaceship.svg";
import PowerButton  from '../subComponents/PowerButton'
import bg from "../assets1/screen4/bg.jpg";
import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'


const Div1 = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px; /* Adjust the gap between Div and Div1 */
  z-index:1
right:100;
`;

const MainContainer = styled(motion.div)`
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(5rem + 2vw);
`
const Div = styled.div`

`;

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Div1>
          <img src={spaceship} width={550} style={{position:"fixed"}} />
        </Div1>
        <Div>
          <img
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 0,
            }}
            src={bg}
          />
        </Div>
        <Container>
          <PowerButton />
          <AnchorComponent number={numbers} />
          <Center>
            <Grid>
              {Blogs.map((blog) => {
                return <BlogComponent key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
          <BigTitle text="BLOG" top="5rem" left="5rem" />
        </Container>
      </MainContainer>
    );
}

export default BlogPage
