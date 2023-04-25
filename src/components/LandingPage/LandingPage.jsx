import './LandingPage.css'
import HeroBanner from '../HeroBanner/HeroBanner'
import Technologies from '../Technologies/Technologies'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
import ContactInfo from '../ContactInfo/ContactInfo'
const LandingPage = (props) => {
  return (
    <div className='page-container'>
      <HeroBanner />
      <Projects />
      <Technologies />
      <AboutMe />
      <ContactInfo />
    </div>//page container
)
}

export default LandingPage