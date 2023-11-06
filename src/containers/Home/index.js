import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EducationItem from '../../components/EducationItem'
import ExperienceItem from '../../components/ExperienceItem'
import {
  Bars,
  Bio,
  Container,
  Education,
  Experience,
  Heading,
  Row,
  Transition,
} from './styles'
import haas from '../../assets/haas.png'
import harvard from '../../assets/harvard.png'
import unlv from '../../assets/unlv.png'
import bhs from '../../assets/bhs.png'
import ccsd from '../../assets/ccsd.png'
import dev from '../../assets/dev.png'
import ds from '../../assets/ds.png'
import edX from '../../assets/edX.webp'

const Home = () => (
  <Container>
    <Header />
    <Bio>
      Born and raised in Las Vegas, NV, where he frequently rode both ATVs and
      snowboards, with stints of playing the Legend of Zelda series mixed in. He
      currently lives in Milton, MA, where he works as a product manager at edX.
      In his free time he loves to create music.
    </Bio>
    <Bars>
      <Heading rotation="2deg" shift="18px">
        Education
      </Heading>
    </Bars>
    <Education>
      <EducationItem
        school="University of California, Berkeley Haas"
        degree="MBA"
        year="'26"
        logo={haas}
        alt="UC Berkely Haas"
      />
      <EducationItem
        school="Harvard University"
        degree2="EdM"
        year2="'21"
        degree="ALM"
        year="'17"
        logo={harvard}
        alt="Harvard"
      />
      <EducationItem
        school="University of Nevada, Las Vegas"
        degree="BS"
        year="'13"
        logo={unlv}
        alt="UNLV"
      />
    </Education>
    <Transition>
      <Heading alt rotation="-2deg" shift="18px">
        Experience
      </Heading>
    </Transition>
    <Experience>
      <ExperienceItem
        company="2U/edX"
        title="Senior Product Manager"
        logo={edX}
        alt="edX"
        yearStart="2021"
        yearEnd="Present"
      />
      <ExperienceItem
        company="DeepScribe"
        title="Product Manager"
        logo={ds}
        alt="DeepScribe"
        yearStart="2021"
        yearEnd="2021"
      />
      <ExperienceItem
        company="Harvard University"
        title="Product Manager, HSA DEV"
        logo={dev}
        alt="Harvard"
        yearStart="2018"
        yearEnd="2020"
      />
      <ExperienceItem
        company="Belmont Hill School"
        title="Computer Science Faculty"
        logo={bhs}
        alt="Belmont Hill"
        yearStart="2017"
        yearEnd="2018"
      />
      <ExperienceItem
        company="Harvard University"
        title="CS50 Teching Fellow"
        logo={harvard}
        alt="Harvard"
        yearStart="2017"
        yearEnd="Present"
      />
      <ExperienceItem
        company="Clark County School District"
        title="Math and CS Teacher"
        logo={ccsd}
        alt="CCSD"
        yearStart="2013"
        yearEnd="2017"
      />
    </Experience>
    <Footer>1991 and onward, my dude. Spencer Tiberi &copy; 2023</Footer>
  </Container>
)

export default Home
