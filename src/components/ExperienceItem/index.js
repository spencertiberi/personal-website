import React, { useState, useEffect } from 'react'
import {
  Column,
  Container,
  Heading,
  Logo,
  LogoContainer,
  Title,
} from './styles'

const ExperienceItem = ({ alt, logo, company, title, yearStart, yearEnd }) => (
  <Container>
    <Column>
      <LogoContainer>
        <Logo src={logo} alt={alt} />
      </LogoContainer>
      <Heading>{company}</Heading>
      <Title>{title}</Title>
      {`${yearStart} ~ ${yearEnd}`}
    </Column>
  </Container>
)

export default ExperienceItem
