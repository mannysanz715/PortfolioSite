import { projects } from "../../data/projectsData.js"
import ProjectCard from "../ProjectCard/ProjectCard"
import './Projects.css'
const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="projects-container">
      {projects.map( (project, idx) =>
        <ProjectCard key={idx} project={project}/>
        )}
        </div>
    </>
)
}

export default Projects