import { Link, NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser } from "../../redux/auth/selectors.js";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";
import css from "./UserMenu.module.css";
import Button from "../Button/Button.jsx";

export default function UserMenu({ onLinkClick }) {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  // const firstLetter = user.name.split("")[0].toUpperCase();

  const handleLogout = () => {
    if (typeof onLinkClick === "function") {
      onLinkClick();
    }
    dispatch(openModal({ modalType: "logout" }));
  };

  return (
    <div className={css.menu}>
      <Link className={css.addRecipeBtn} onClick={onLinkClick} to="/add">
        Створити оголошення
      </Link>

      <div className={css.info}>
        <div className={css.nameDiv}>
          {/* <p className={css.firstLetter}>{firstLetter}</p>
          <p className={css.name}>{user.name}</p> */}
         <NavLink
          to="/profile"
        >
          Ю
        </NavLink>
          {/* <p className={css.firstLetter}>Ю
            
          </p> */}
          <p className={css.name}>Юлія</p>
        </div>
        <Button
          onClick={handleLogout}
          className={css.btnSvg}
          type="button"
          aria-label="Log out"
        >
          {/* <svg className={css.icon} width="24" height="24">
            <use href="/sprite.svg#icon-logout-24px" />
          </svg> */}
          Logout
        </Button>
      </div>
    </div>
  );
}
