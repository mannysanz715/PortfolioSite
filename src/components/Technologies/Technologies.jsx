import './Technologies.css'
const Technologies = () => {
  return (
    <div className="tech-used-container">
      <h2>My ToolSet:</h2>
      <div className='tech-used-images'>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/react.png" alt="reactIcon"></img>
        <h4>ReactJS</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/node-js.png" alt="expressIcon"></img>
        <h4>Express.Js</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/javascript.png" alt="JavaScriptIcon"></img>
        <h4>JavaScript</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/nodejs.png" alt="NodeIcon"></img>
        <h4>Node.js</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/mongodb.png" alt="MongoDB"></img>
        <h4>MongoDB</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/typescript.png" alt="TypeScript"></img>
        <h4>TypeScript</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/git.png" alt="git"></img>
        <h4>Git</h4>
      </div>
      <div className='tech-element'>
        <img className='tech-img' src="/tech-icons/github.png" alt="github"></img>
        <h4>GitHub</h4>
      </div>
     </div> {/*  techused */}
    </div>
)
}

export default Technologies