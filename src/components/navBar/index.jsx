import { Link } from 'react-router-dom';
import { useState } from 'react';
import { navMenus } from './config';
import { ReactComponent as Fabar } from '../../assets/bars.svg';
import { ReactComponent as Xbar } from '../../assets/xmarkSolid.svg';
import './styles.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar_container">
          <Link to="/" className="navbar_container_logo">
            <h1>.CJ</h1>
          </Link>
          <ul className={click ? 'active' : 'navbar_container_menu'}>
            {/* Links */}
            {navMenus.map((item, i) => (
              <li key={i} className="navbar_menu_items">
                <Link to={item.to} className="navbar_menu_items_links">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <Xbar /> : <Fabar />}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
