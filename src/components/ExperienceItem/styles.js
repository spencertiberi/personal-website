import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Column = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: auto;
  color: inherit;
`

export const Container = styled(Flex)`
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: auto;
  min-height: 100%;
  width: auto;
  color: #9ba28a;
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 400;
`

export const Heading = styled.h2`
  color: #d4b483;
  font-family: 'outfit', sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  margin: 5px 0;
`

export const Title = styled.h3`
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 700;
  font-style: italic;
  text-align: center;
  margin: 5px 0;
`

export const Logo = styled.img`
  width: auto;
  max-width: 10vw;
  height: auto;
  max-height: 100%;
`

export const LogoContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 168px;
  width: 100%;
`
