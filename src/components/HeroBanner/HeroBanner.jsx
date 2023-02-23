import './HeroBanner.css'

const HeroBanner = () => {
  return (
  <div className="banner-container">
    <h2 className='profile-description animate__zoomIn animate__delay-.5s animate__animated'>
      Manuel Sanchez
    </h2>
    <img className="profile-image animate__zoomIn animate__delay-.5s animate__animated " src="/mannypic.png" alt="" width='300px' />
    <h2 className="profile-description animate__zoomIn animate__delay-.5s animate__animated">
    Software Developer</h2>
  </div>
      
)
}

export default HeroBanner