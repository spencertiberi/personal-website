import React from 'react'
import { Column, Container, Degree, Heading, Logo, LogoContainer } from './styles'

const EducationItem = ({ alt, logo, school, degree, year, degree2, year2 }) => (
  <Container>
    <Column>
      <LogoContainer>
        <Logo src={logo} alt={alt} />
      </LogoContainer>
      <Heading>{school}</Heading>
      <Degree>
        {degree && `${degree}`}{year && `${year}`}
        {degree2 && `, ${degree2} `}{year2 && `${year2}`}
      </Degree>
    </Column>
  </Container>
)

export default EducationItem
