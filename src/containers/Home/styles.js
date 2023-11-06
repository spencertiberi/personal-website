import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Bars = styled(Flex)`
  flex-direction: Column;
  align-items: center;
  justify-content: flex-end;
  height: 200px;
  width: 100vw;
  background: rgb(212, 180, 131);
  background: linear-gradient(
    182deg,
    rgba(212, 180, 131, 1) 40%,
    rgba(201, 185, 142, 1) 40%,
    rgba(201, 185, 142, 1) 50%,
    rgba(189, 189, 152, 1) 50%,
    rgba(189, 189, 152, 1) 60%,
    rgba(175, 185, 154, 1) 60%,
    rgba(175, 185, 154, 1) 70%,
    rgba(161, 180, 156, 1) 70%
  );
`

export const Bio = styled.p`
  flex-direction: Column;
  align-items: center;
  justify-content: flex-start;
  text-align: justify;
  width: 50%;
  color: #505647;
  font-family: 'Jost', sans-serif;
  font-size: 1.2em;
  font-weight: 400;
`

export const BioSection = styled(Flex)`
  flex-direction: Row;
  justify-content: center;
  align-items: center;
  width: 600px;
  max-width: 80vw;
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
  }
`

export const Container = styled(Flex)`
  flex-direction: Column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
  background: #d4b483;
  color: #505647;
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 400;
`

export const Education = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-flow: row-reverse;
  padding: 0 5vw;
  width: 100vw;
  background-color: #a1b49c;
  flex-wrap: wrap;
`

export const Experience = styled(Flex)`
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 0 5vw;
  width: 100vw;
  background-color: #505647;
  flex-wrap: wrap;
`

export const Heading = styled.h1`
  color: ${(props) => (props.alt ? '#D4B483' : '#505647')};
  position: relative;
  top: ${(props) => (props.shift ? props.shift : '0')};
  font-family: 'Jost', sans-serif;
  font-style: italic;
  font-size: 3.2em;
  font-weight: 500;
  transform: ${(props) => props.rotation && `rotate(${props.rotation})`};
  max-width: 90vw;
`

export const Row = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  width: 100vw;
  height: auto;
  color: inherit;
`

export const ProfileImage = styled.img`
  width: 400px;
  height: auto;
  max-height: 37vw;
  max-width: 40vw;
`

export const Transition = styled(Flex)`
  flex-direction: Column;
  align-items: center;
  justify-content: flex-end;
  height: 200px;
  width: 100vw;
  background: rgb(161, 180, 156);
  background: linear-gradient(
    178deg,
    rgba(161, 180, 156, 1) 40%,
    rgba(141, 157, 135, 1) 40%,
    rgba(141, 157, 135, 1) 50%,
    rgba(121, 133, 114, 1) 50%,
    rgba(121, 133, 114, 1) 60%,
    rgba(101, 110, 93, 1) 60%,
    rgba(101, 110, 93, 1) 70%,
    rgba(80, 86, 71, 1) 70%
  );
`
