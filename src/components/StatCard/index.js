import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ProgressIndicator } from '@fluentui/react'
import { Flex } from '@rebass/grid'

const Container = styled(Flex)`
  flex-direction: Column;
  padding: 20px;
  width: auto;
  color: inherit;
`

const Bio = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 20vw;
  min-width: 200px;
  margin-right: 30px;

  @media only screen and (max-width: 650px) {
    width: 40vw;
    min-width: 40vw;
  }
`

const Image = styled.img`
  width: 20vw;
  height: auto;
  min-width: 200px;
  min-height: 200px;
  margin: 0 0 10px 0;
  border-radius: 12px;

  @media only screen and (max-width: 650px) {
    width: 40vw;
    min-width: 40vw;
    min-height: 40vw;
  }
`

const Row = styled(Flex)`
  font-size: 16px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0;
`

const Stats = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const StatContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  margin-bottom: 8px;
`

const Text = styled(Flex)`
  font-size: 16px;
  text-align: justify;
`

const Bar = styled(ProgressIndicator)`
  width: 30vw;
  min-width: 250px;
  text-align: start;

  @media only screen and (max-width: 650px) {
    width: 40vw;
    min-width: 40vw;
  }
`
const barStyles = {
  progressBar: {
    backgroundColor: '#375F74',
  },
  progressTrack: {
    backgroundColor: 'rgb(50,50,50,0.5)',
  },
  itemProgress: {
    padding: 0,
  },
  itemName: {
    fontFamily: 'inherit',
    color: 'inherit',
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 'bold',
  },
  root: {
    fontFamily: 'inherit',
    color: 'inherit',
  },
}

const StatLine = ({ stat, level }) => {
  const number = Number.isInteger(level) ? level : 0
  const [value, setValue] = useState(0)

  useEffect(() => setValue(number), [number])

  return (
    <StatContainer>
      <Bar
        percentComplete={value / 10}
        barHeight={12}
        ariaValueText={number}
        styles={barStyles}
        label={stat}
      />
    </StatContainer>
  )
}

const StatCard = ({ person }) => (
  <Container>
    <Row>
      <Bio>
        <Image src={person.image} />
        <b>Bio</b>
        <Text>{person.bio}</Text>
      </Bio>
      <Stats>
        {person.stats
          ? Object.entries(person.stats).map((stat, index, arr) => {
              return <StatLine stat={stat[0]} level={stat[1]} />
            })
          : 'Error Loading Stats'}
      </Stats>
    </Row>
  </Container>
)

export default StatCard
