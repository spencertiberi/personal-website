import React, { useState, useEffect } from 'react'
import {
  Button,
  Column,
  Container,
  Description,
  Logo,
  LogoContainer,
  Title,
} from './styles'
import userEvent from '@testing-library/user-event'

const ExperienceItem = ({
  alt,
  logo,
  title,
  description,
  color,
  link,
  flip,
}) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <Container color={color}>
      {flipped ? (
        <>
          <iframe
            width="100%"
            height="400"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1076474509&color=%232e5059&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <Button color={color} onClick={() => setFlipped(!flipped)}>
            Back
          </Button>
        </>
      ) : (
        <Column>
          <LogoContainer>
            <Logo src={logo} alt={alt} />
          </LogoContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {link && (
            <Button color={color} onClick={() => window.open(link, '_blank')}>
              Learn More
            </Button>
          )}
          {flip && (
            <Button color={color} onClick={() => setFlipped(!flipped)}>
              Learn More
            </Button>
          )}
        </Column>
      )}
    </Container>
  )
}

export default ExperienceItem
