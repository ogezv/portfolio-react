import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-[#3366ff] flex font-bold items-center justify-between">
        <div className="flex items-center">
          <img src="/img/balise.png" className="h-12" />
          <span className="title">Victor Ogez</span>{" "}
        </div>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="md:flex hidden justify-around ">
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/a-propos">A propos</NavLink>
          </li>
          <li>
            <NavLink to="/contact"> Contact</NavLink>
          </li>
          <li>
            <NavLink to="/experiences"> Expériences</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
