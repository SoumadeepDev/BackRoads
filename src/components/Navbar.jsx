import navLogo from "../images/logo.svg";
import { pageLinks } from "./data";
import { navSocialIcons } from "./data";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={navLogo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((eachNav) => {
            return (
              <li key={eachNav.id}>
                <a href={eachNav.href} className="nav-link">
                  {eachNav.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {navSocialIcons.map((icon) => {
            return (
              <li key={icon.id}>
                <a
                  href={icon.href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon.className}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
