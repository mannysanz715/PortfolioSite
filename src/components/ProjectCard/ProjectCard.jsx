import './ProjectCard.css'

const ProjectCard = ({project}) => {
  return (
    <>
      <div>
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <ul>
        {project.techUsed.map( tech =>
          <li>{tech}</li>
        )}
        </ul>
        <a href={project.link} target="_blank"><button className="projects-buttons">Live Demo</button></a>
        <a href={project.gitLink} target="_blank"><button className="projects-buttons">GitHub</button></a>

      </div>
    </>
)
}

export default ProjectCard