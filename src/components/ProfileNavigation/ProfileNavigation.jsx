import { Link } from "react-router-dom";
// import clsx from "clsx";

import css from "./ProfileNavigation.module.css";

// const buildLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.active);
// };

export default function ProfileNavigation() {

  
  return (
    // <nav className={css.nav}>
    //   <NavLink className={buildLinkClass} to="/profile/own">
    //     Оголошення
    //   </NavLink>
    //   <NavLink className={buildLinkClass} to="/profile/data">
    //     Особисті дані
    //   </NavLink>
    // </nav>
      <div className={`container ${css.container}`}>
        <div className={css.content}>
          <div className={css.logo}>
            <img width="120" src="/icons/180x180.png" alt="TailsFinder Logo" />
          </div>

          <h1 className={css.title}>TailsFinder</h1>

          <div className={css.errorCode}>404</div>

          <h2 className={css.subtitle}>Сторінка профілю</h2>
          <p className={css.description}>
            {" "}
            Ця сторінка ще в розробці. Незабаром ви зможете переглядати свій
            профіль та керувати оголошеннями.
          </p>

          <div className={css.actions}>
            <Link to="/" className={css.primaryButton}>
              Повернутися на головну
            </Link>
          </div>
      </div>
      </div>
  );}