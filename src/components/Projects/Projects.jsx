import { projects } from "../../data/projectsData.js"
import ProjectCard from "../ProjectCard/ProjectCard"
import './Projects.css'
const Projects = () => {
  return (
    <div className="project-container">
      <h2 className="projects-name">Projects</h2>
      <div className="projects-container">
      {projects.map( (project, idx) =>
        <ProjectCard key={idx} project={project}/>
        )}
        </div>
    </div>
)
}

export default Projects