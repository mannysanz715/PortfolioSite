import './ProjectCard.css'

const ProjectCard = ({project, index}) => {
  console.log(index)
  return (
    <>
      <div className={(index % 2 !== 0 ? 'card-container even' : 'card-container')} >
      <div className={(index % 2 !== 0 ? 'card even' : 'card')}>

        <div className='title-image'>
          <h3>{project.title}</h3>
          <img className="project-img" src={project.img} alt="Project pic" />
          <div className='card-buttons'>
        <a href={project.link} target="_blank" rel="noreferrer"><button className="projects-buttons">Live Demo</button></a>
        <a href={project.gitLink} target="_blank" rel="noreferrer"><button className="projects-buttons">GitHub</button></a>
        </div>
        </div>
        <div className='card-desc'>
          <h3>Technologies:</h3>
        <ul className='tech-container'>
        {project.techUsed.map( tech =>
          <li key={tech} >{tech}</li>
          )}
        </ul>
          <p>{project.desc}</p>
        </div>
      </div>

      </div>
    </>
)
}

export default ProjectCard