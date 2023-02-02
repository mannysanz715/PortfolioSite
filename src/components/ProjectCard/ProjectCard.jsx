import './ProjectCard.css'

const ProjectCard = ({project}) => {
  return (
    <>
      <div className='card-container'>
        <img className="project-img" src={project.img} alt="Project Image" />
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
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