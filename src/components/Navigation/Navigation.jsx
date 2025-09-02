import { NavLink } from "react-router-dom";
import clsx from "clsx";


import css from "./Navigation.module.css";


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation({ onLinkClick }) {


  
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} onClick={onLinkClick} to="/">
        Про нас
      </NavLink>
      <NavLink className={buildLinkClass} onClick={onLinkClick} to="/ads">
        Їх шукають
      </NavLink>
      <NavLink className={buildLinkClass} onClick={onLinkClick} to="/contacts">
        Контакти
      </NavLink>
    </nav>
  );
}
