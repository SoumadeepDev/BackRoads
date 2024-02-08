import { pageLinks } from "./data";
import { navSocialIcons } from "./data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {navSocialIcons.map((icon) => {
          return (
            <li key={icon.id}>
              <a
                href={icon.href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon.className}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads tour & travels company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
