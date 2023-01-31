import './LandingPage.css'
import { Link } from 'react-router-dom'


const LandingPage = (props) => {
  return (
    <>
      <div className="landing-container">
        <div className="banner-container">
          <img className="profile-image animate__zoomIn animate__delay-.5s animate__animated" src="https://via.placeholder.com/250/09f.png/fff " alt="" />
          <h2 className="profile-description animate__zoomIn animate__delay-1s animate__animated">A Full Stack Software Developer</h2>
        </div>
        <div class='button-container'>
          <Link to='/about-me'>
            <button>
              About Me
            </button>
          </Link>
          <Link to='/projects'>
            <button>
              Projects
            </button>
          </Link>
          <Link to='/resume'>
            <button>
              Resume
            </button>
          </Link>
          <Link to='https://github.com/mannysanz715' target="_blank">
            <button>
              GitHub
            </button>
          </Link>
        
        </div>
      </div>
    </>
)
}

export default LandingPage