import './ContactInfo.css'
const ContactInfo = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>
        Lets Connect!
      </h1>
      <ul className='contact-list'>
      <a target="_blank" href='https://www.linkedin.com/in/manuel-sanchez-leandro/'><li className="linkedIn list-item">
          LinkedIn <img src='/linkedin.png' alt='linkedIn-img'/>
        </li></a>
        <a href='https://github.com/mannysanz715' target='_blank'><li className="github list-item">
          GitHub <img src='/github.png' alt='github-img'/>
        </li></a>
        <a href="https://drive.google.com/file/d/1AMKMILOEmWyopWbh-0aeYdZEJS4JyOmh/view?usp=share_link" target='_blank'><li className="resume list-item">Resume <img src='/resume.png' alt='email-img'/></li></a>
        <a href="mailto:mannysleandro@gmail.com"><li className="email list-item">Email Me <img src='/gmail.png' alt='email-img'/></li></a>
      </ul>
    </div>
)
}

export default ContactInfo