import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Column = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 300px;
  color: inherit;
`

export const Container = styled(Flex)`
  flex-direction: Row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: auto;
  width: 400px;
  color: #505647;
  font-family: 'Jost', sans-serif;
  font-size: 1em;
  font-weight: 400;
  max-width: 100vw;
`

export const Heading = styled.h2`
  color: #55655a;
  font-family: 'outfit', sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  margin: 5px 0;
  max-width: 100vw;
`

export const Logo = styled.img`
  width: auto;
  max-width: 80%;
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
