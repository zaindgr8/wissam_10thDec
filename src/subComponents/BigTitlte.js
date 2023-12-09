import React from 'react'
import styled from 'styled-components'
import bg from "../assets1/danish/screen1.mp4";

const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => `rgba(${props.theme.textRgba},0.1)`};
font-size: calc(5rem + 5vw);
z-index:-1;

`


const BigTitlte = (props) => {
    return (
      <div>
        {/* <Text top={props.top} left={props.left} right={props.right}>
          Wissam Serdoun
        </Text> */}
        <Text>
          <video
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            src={bg}
            autoPlay
            loop
            muted
          />
        </Text>
      </div>
    );
}

export default BigTitlte
