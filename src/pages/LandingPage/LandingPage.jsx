import './LandingPage.css'
import { Link } from 'react-router-dom'


const LandingPage = (props) => {
  return (
    <>
      <div className="landing-container">
        <div className="banner-container">
          <img className="profile-image animate__zoomIn animate__delay-.5s animate__animated" src="/mannypic.png" alt="" width='300px' />
          <h2 className="profile-description animate__zoomIn animate__delay-1s animate__animated">A Full Stack Software Developer</h2>
        </div>
        <div className='button-container'>
          <div className='top-buttons'>
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
          </div>
          <div className="bottom-buttons">
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
          <button>
            <a href = "mailto:mannys.leandro@gmail.com?subject = Portfolio OutReach = Message">
              Email Me
            </a> 
          </button>


          
          </div>
        
        </div>
      </div>
    </>
)
}

export default LandingPage