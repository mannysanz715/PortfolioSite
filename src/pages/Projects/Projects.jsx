import { projects } from "../../data/projectsData.js"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
const Projects = () => {
  return (
    <>
      <h1>Projects</h1>

      {projects.map( (project, idx) =>
        <ProjectCard key={idx} project={project}/>
      )}
    </>
)
}

export default Projects