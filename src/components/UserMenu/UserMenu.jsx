import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modal/slice.js";
import css from "./UserMenu.module.css";
import Switch from "@mui/material/Switch";
import { selectUser } from "../../redux/auth/selectors.js";

export default function UserMenu({ onLinkClick }) {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const firstLetter = user.name.split("")[0].toUpperCase();

  const handleLogout = () => {
    if (typeof onLinkClick === "function") {
      onLinkClick();
    }
    dispatch(openModal({ modalType: "logout" }));
  };

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className={css.menu}>
      <Link className={css.addBtn} onClick={onLinkClick} to="/ads/add">
        Створити оголошення
      </Link>

      <div className={css.info}>
        <div className={css.nameDiv}>
          <NavLink to="/profile" className={css.letter}>
            {firstLetter}
          </NavLink>
        </div>
        <button type="button" onClick={handleLogout} className={css.button}>
          <Switch
            {...label}
            defaultChecked
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#5b5aff",
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#5b5aff",
              },
            }}
          />
          Logout
        </button>
      </div>
    </div>
  );
}
