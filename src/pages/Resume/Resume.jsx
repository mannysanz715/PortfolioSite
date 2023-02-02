import './Resume.css'

const Resume = (props) => {
  return (
    <>
    <div className='resume-container'>
    <iframe
    src="/resume.pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
></iframe>
    </div>
    </>
)
}

export default Resume