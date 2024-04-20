import { NavLink } from "react-router-dom";


const Header = () => {
    const list = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/blog'}>Blog</NavLink></li>
    <li><NavLink to={'/Statistics'}>Statistics</NavLink></li>
    <li><NavLink to={'/Applied jobs'}>Applied jobs</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      
                        
    </div>
    <a className="btn btn-ghost text-xl">CareerHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
            </div>
           
            
        </div>
    );
};

export default Header;