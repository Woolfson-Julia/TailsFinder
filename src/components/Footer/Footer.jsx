import css from "./Footer.module.css";
import { NavLink} from "react-router-dom";

import Logo from "../Logo/Logo";

export default function Footer() {


  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.inner}>
          <Logo className={css.logo} />

          <p className={css.copy}>
            © 2025 All rights reserved.
          </p>
          <p>Швидка навігація</p>
          <nav className={css.nav}>
            <NavLink to="/" className={css.link}>
              Про нас
            </NavLink>
            <NavLink to="ads" className={css.link}>
              Їх шукають
            </NavLink>
            <NavLink to="contacts" className={css.link}>
              Контакти
            </NavLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}
