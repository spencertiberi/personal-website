import React, { useState, useEffect } from 'react'
import { Column, Container, Heading, Logo, LogoContainer } from './styles'

const EducationItem = ({ alt, logo, school, degree, year, degree2, year2 }) => (
  <Container>
    <Column>
      <LogoContainer>
        <Logo src={logo} alt={alt} />
      </LogoContainer>
      <Heading>{school}</Heading>
      {`${degree} ${year}`}
      {degree2 && year2 && `, ${degree2} ${year2}`}
    </Column>
  </Container>
)

export default EducationItem
