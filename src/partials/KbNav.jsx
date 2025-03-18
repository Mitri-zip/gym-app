import logo from '../assets/main-logo.png';
import { Link } from 'react-router-dom';

function KbNav() {
  return (
    <header className="header">
      <nav className="options-margin">
        <div>
          <hr className="top-header-line" />
        </div>
        <div className="options-text-margin">
          <div>
            <Link to="/bookclass">
              <p className="options-text">BOOK CLASS</p>
            </Link>
          </div>
          <div>
            <Link to="/pricing">
              <p className="options-text">MEMBERSHIP</p>
            </Link>
          </div>
          <div>
            <Link to="/highvibes">
              <p className="options-text">HIGH VIBEZ</p>
            </Link>
          </div>
          <div className="drop-down">
            <p className="options-text">MORE ▼</p>
            <div className="dropdown-content">
              <Link to="/signup" className="links">Sign Up</Link>
              <Link to="/home" className="links">Home</Link>
              <Link to="/seamoss" className="links">Sea Moss</Link>
            </div>
          </div>
        </div>
        <div>
          <hr className="bottom-header-line" />
        </div>
      </nav>
      <div className="about-me-layout">
        <img src={logo} className="about-me-pic" alt="Logo" />
      </div>
    </header>
  );
}

export default KbNav;
