import './AboutMe.css'
const AboutMe = () => {
  return (
    <>
      <h2 className='about-me-title'>About Me</h2>
      <div className="about-container">
        {/* <img className="profile-image animate__zoomIn animate__delay-.5s animate__animated " src="/mannypic.png" alt="" width='300px' /> */}
        <div className='about-me-text'>

        <p className="about-me-paragraph">
            Good day! I am Manny, a Software Developer with a passion for coding. I  discovered my interest in programming during my high school years and have continued to cultivate my skills since then. I find great satisfaction in working on projects and collaborating with others in the field.
        </p>
        <p className="about-me-paragraph">
            Aside from my profession, I also have a love for music and have honed several musical talents over the years. I taught myself the guitar at the age of six, played the violin in middle school, and recently added piano and saxophone to my repertoire. I am constantly seeking new challenges and look forward to what new skill I will acquire next.
        </p>
        </div>
      </div>
    </>
)
}

export default AboutMe