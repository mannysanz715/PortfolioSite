import './ContactInfo.css'
const ContactInfo = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>
        Lets Connect!
      </h1>
      <ul className='contact-list'>
      <a target="_blank" href='https://www.linkedin.com/in/manuel-sanchez-leandro/'><li className="linkedIn list-item">
          LinkedIn : https://www.linkedin.com/in/manuel-sanchez-leandro/
        </li></a>
        <a href='https://github.com/mannysanz715' target='_blank'><li className="github list-item">
          GitHub:https://github.com/mannysanz715
        </li></a>
        <a href="https://drive.google.com/file/d/1AMKMILOEmWyopWbh-0aeYdZEJS4JyOmh/view?usp=share_link" target='_blank'><li className="resume list-item">Resume</li></a>
        <a href="mailto:mannysleandro@gmail.com"><li className="email list-item">Email Me : mannysleandro@gmail.com</li></a>
      </ul>
    </div>
)
}

export default ContactInfo