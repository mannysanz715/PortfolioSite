import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className='name-title'>
        <h1 className="nav-title centered"><a href="#root">Manuel Sanchez</a></h1>
      </div>
      <div className='nav-links'>
        <ul className='link-ul'>
          <li className='nav-link'>About Me</li>
          <li className='nav-link'>Technologies</li>
          <li className='nav-link'>Projects</li>
          <li className='nav-link'>Contact Me</li>
        </ul>
      </div>
      
    </div>
)
}

export default NavBar