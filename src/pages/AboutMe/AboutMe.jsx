import './AboutMe.css'
const AboutMe = (props) => {
  return (
    <>
    <div className="about-container">
      <img className="profile-image animate__zoomIn animate__delay-.5s animate__animated" src="/mannypic.png" alt="" width='300px' />
      <h2>About Me</h2>
        <p className="about-me-paragraph">
          Hi! My name is Manny and I am a Software Developer. I got into programming when I was in High School, and have stuck with it since then. Building out projects and getting to work with the people around me on projects is why I became a developer in the first place. I also really love music, and picking up new skill come to me easily. I taught myself the guitar when I was 6, played violin in Middle School, and just recently picked up the piano and saxophone. I wonder what cool thing I will pick up next!?!? 
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