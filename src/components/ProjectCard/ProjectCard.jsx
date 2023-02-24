import './ProjectCard.css'

const ProjectCard = ({project}) => {
  return (
    <>
      <div className='card-container'>
        <img className="project-img" src={project.img} alt="Project Image" />
        <div className='card-desc'>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
        <ul className='tech-container'>
        {project.techUsed.map( tech =>
          <li key={tech} >{tech}</li>
        )}
        </ul>
        <div className='card-buttons'>
        <a href={project.link} target="_blank"><button className="projects-buttons">Live Demo</button></a>
        <a href={project.gitLink} target="_blank"><button className="projects-buttons">GitHub</button></a>
        </div>

      </div>
    </>
)
}

export default ProjectCard