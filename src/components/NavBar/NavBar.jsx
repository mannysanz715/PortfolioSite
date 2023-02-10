import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="nav-bar centered">
      <h1 className="nav-title centered"><Link to='/'>Manuel Sanchez</Link></h1>
      {/* <h1 className="nav-title centered">-</h1> */}
    </div>
)
}

export default NavBar