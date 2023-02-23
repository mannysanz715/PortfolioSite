import './LandingPage.css'
import HeroBanner from '../HeroBanner/HeroBanner'
import Technologies from '../Technologies/Technologies'
import AboutMe from '../AboutMe/AboutMe'
import Projects from '../Projects/Projects'
const LandingPage = (props) => {
  return (
    <div className='page-container'>
      <HeroBanner />
      <Technologies />
      <AboutMe />
      <Projects />
    </div>//page container
)
}

export default LandingPage