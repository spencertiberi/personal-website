import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Button = styled.button`
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 700;
  color: inherit;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: ${(props) =>
    props.color ? 'rgba(255,255,255,0.8)' : '#505647'};
  border-radius: 4px;
  margin: 10px 0 0;
`

export const Column = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: auto;
  color: inherit;
`

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  height: auto;
  min-height: 45vh;
  width: 40vw;
  color: ${(props) => (props.color ? 'rgba(255,255,255,0.8)' : '#505647')};
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 400;
  border-radius: 12px;
  background-color: ${(props) =>
    props.color ? 'rgba(' + props.color + ', 1)' : 'rgba(161, 180, 156, 1)'};

  @media screen and (max-width: 900px) {
    width: 84vw;
  }
`

export const Title = styled.h2`
  font-family: 'outfit', sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  margin: 5px 0;
`

export const Description = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 500;
  font-style: regular;
  text-align: center;
  margin: 5px 0;
`

export const Logo = styled.img`
  width: auto;
  max-width: 25vw;
  height: auto;
  max-height: 100%;

  @media screen and (max-width: 900px) {
    max-width: 70vw;
    max-height: 25vh;
  }
`

export const LogoContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15vw;
  width: 100%;

  @media screen and (max-width: 900px) {
    height: auto;
  }
`
