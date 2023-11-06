import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import redrock from '../assets/redrock.svg'
import signature from '../assets/signature.png'

const Container = styled(Flex)`
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  padding: 20px 0 0;
  height: auto;
  width: 100vw;
  background: rgb(143, 205, 194);
  background: radial-gradient(
    circle,
    rgba(143, 205, 194, 1) 0%,
    rgba(166, 197, 173, 1) 100%
  );
  color: #d4b483;
  font-size: 1em;
`

const Vista = styled.div`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.src})`};
`

const Signature = styled.img`
  height: 275px;
  width: 550px;
  z-index: 5;
  position: absolute;
`
const Gradient = styled(Flex)`
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  top: -40px;
  height: 200px;
  width: 100vw;
  background: rgb(208, 161, 125);
  background: rgb(212, 180, 131);
  background: linear-gradient(
    358deg,
    rgba(212, 180, 131, 1) 40%,
    rgba(210, 171, 128, 1) 40%,
    rgba(210, 171, 128, 1) 50%,
    rgba(208, 161, 125, 1) 50%,
    rgba(208, 161, 125, 1) 60%,
    rgba(206, 151, 122, 1) 60%,
    rgba(206, 151, 122, 1) 70%,
    rgba(203, 141, 119, 1) 70%
  );
`

export const Heading = styled.h1`
  color: ${(props) => (props.alt ? '#D4B483' : '#505647')};
  position: relative;
  top: ${(props) => (props.shift ? props.shift : '0')};
  font-family: 'Jost', sans-serif;
  font-style: italic;
  font-size: 4em;
  font-weight: 500;
  transform: ${(props) => props.rotation && `rotate(${props.rotation})`};
`

const Header = () => (
  <>
    <Container>
      <Signature src={signature} />
      <Vista src={redrock} />
    </Container>
    <Gradient>
      <Heading shift="8px" rotation="-2deg">
        Hi, I'm Spencer
      </Heading>
    </Gradient>
  </>
)

export default Header
