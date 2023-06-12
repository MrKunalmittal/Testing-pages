/*
    using react lib in our app laows us to naviahgete between diff pages and componenyts in reacyt 
    actually make these change to url of each page or compoments

    react-router isnt installed with create-react-app by deafault 
    so we need to install after to use 

    npm i react-router-dom

    link is used to navigate the diff routes on the site
    NavLInk
*/
import{ NavLink, Link} from 'react-router-dom'
function Header(props) {
    return (
      <header>
          <div className="container flex">
              <div className="header-title">
                  <h1>{props.name}</h1>
              </div>
              <div className="nav-bar">
                  <ul>
                      <li><Link to="/" href="#" ><p>Home</p></Link></li>
                      <li><Link to="/tutorials" href="#" ><p>Tutorials</p></Link></li>
                      <li><NavLink
                      className={navData => (navData.isActive? "active" : "")}
                       to="/documentation">Documentation</NavLink></li>
                        {/*Using object destructring */}
                      <li><NavLink
                        className={({isActive}) => (isActive ? "active" : "")}
                       to="/aboutus">About Us</NavLink></li>
                  </ul>
              </div>
          </div>
      </header>
    )
  }
  
  export default Header