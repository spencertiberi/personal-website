import React from 'react'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  flex-direction: Column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px 2vw;
  height: 200px;
  width: 100vw;
  color: #d4b483;
  background: rgb(80, 86, 71);
  background: linear-gradient(
    182deg,
    rgba(80, 86, 71, 1) 50%,
    rgba(166, 197, 173, 1) 50%,
    rgba(166, 197, 173, 1) 60%,
    rgba(212, 180, 131, 1) 60%,
    rgba(212, 180, 131, 1) 70%,
    rgba(203, 141, 119, 1) 70%,
    rgba(203, 141, 119, 1) 80%,
    rgba(193, 102, 107, 1) 80%
  );
  font-size: 0.8em;
`

const Footer = ({ children }) => <Container>{children}</Container>

export default Footer
