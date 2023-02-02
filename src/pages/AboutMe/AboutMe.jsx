import './AboutMe.css'
const AboutMe = (props) => {
  return (
    <>
    <div className="about-container">
      <img className="profile-image animate__zoomIn animate__delay-.5s animate__animated" src="/mannypic.png" alt="" width='300px' />
      <h2>About Me</h2>
        <p className="about-me-paragraph">
          Good day! I am Manny, a Software Developer with a passion for coding. I  discovered my interest in programming during my high school years and have continued to cultivate my skills since then. I find great satisfaction in working on projects and collaborating with others in the field.
          <br/>
          Aside from my profession, I also have a love for music and have honed several musical talents over the years. I taught myself the guitar at the age of six, played the violin in middle school, and recently added piano and saxophone to my repertoire. I am constantly seeking new challenges and look forward to what new skill I will acquire next.
        </p>
        <br/>
        <br/>
        <h2>My ToolSet:</h2>
        <div className="tech-used-container">
          <img src="/react.gif" alt="reactIcon"></img>
          <img src="/express.png" alt="expressIcon"></img>
          <img src="/javascript.gif" alt="JavaScriptIcon"></img>
          <img src="/node.png" alt="NodeIcon"></img>
          <img src="/css.png" alt="CssIcon"></img>
          <img src="/html.png" alt="HTMLIcon"></img>
        </div>
      </div>
    </>
)
}

export default AboutMe