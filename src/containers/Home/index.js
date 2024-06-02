import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EducationItem from '../../components/EducationItem'
import ExperienceItem from '../../components/ExperienceItem'
import PortfolioItem from '../../components/PortfolioItem'
import StatCard from '../../components/StatCard'
import {
  Bars,
  BioSection,
  Container,
  Education,
  Experience,
  Heading,
  Portfolio,
  Tab,
  Transition,
  Wrapper,
} from './styles'
import haas from '../../assets/haas.png'
import harvard from '../../assets/harvard.png'
import unlv from '../../assets/unlv.png'
import bhs from '../../assets/bhs.png'
import ccsd from '../../assets/ccsd.png'
import dev from '../../assets/dev.png'
import ds from '../../assets/ds.png'
import edX from '../../assets/edX.webp'
import roach from '../../assets/roach.png'
import xpert from '../../assets/xpert.png'
import thiswebsite from '../../assets/thiswebsite.png'
import { defaultUser } from '../../components/StatCard/people'

const Home = () => (
  <Container>
    <Header />
    <BioSection>
      <StatCard person={defaultUser} />
    </BioSection>
    <Bars>
      <Heading rotation="2deg" shift="18px" italic>
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
      <Heading alt rotation="-2deg" shift="18px" italic>
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
    <Wrapper>
      <Heading alt shift="18px">
        Portfolio
      </Heading>
      <Portfolio>
        <Tab />
        <PortfolioItem
          title="Xpert Learning Assistant"
          logo={xpert}
          alt="Xpert Learning Assistant"
          description="Chat-GPT-driven virtual tutor on edX.org"
          color="14,41,44"
          link="https://press.edx.org/edx-debuts-two-ai-powered-learning-assistants-built-on-chatgpt"
        />
        <PortfolioItem
          title="This Website"
          logo={thiswebsite}
          alt="spencertiberi.com"
          description="A personal website built using React.JS"
          color="55, 95, 116"
          link="https://github.com/spencertiberi/personal-website"
        />
        <PortfolioItem
          title="Roach"
          logo={roach}
          alt="Roach"
          description="An EP recorded in my apartment during the COVID-19 stay-at-home order. Dedicated to my dad for Father's Day"
          color="82, 119, 99"
          flip
        />
      </Portfolio>
    </Wrapper>
    <Footer>1991 onward and upward, my dude. Spencer Tiberi &copy; 2024</Footer>
  </Container>
)

export default Home
