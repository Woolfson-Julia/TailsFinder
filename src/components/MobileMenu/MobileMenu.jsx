import { useEffect } from "react";
import Logo from "../Logo/Logo.jsx";
import NavPanel from "../NavPanel/NavPanel.jsx";
import css from "./MobileMenu.module.css";
import Button from "../Button/Button.jsx";

export default function MobileMenu({ onClose }) {
  useEffect(() => {
    const handleKeypress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeypress);
    return () => {
      document.removeEventListener("keydown", handleKeypress);
    };
  }, [onClose]);

  return (
    <div className={css.mobileMenuBackdrop}>
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.topBar}>
            <Logo />
            <Button
              onClick={onClose}
              className={css.btnSvg}
              variant="none"
              type="button"
              aria-label="Close mobile menu"
            >
              <svg className={css.icon} width="21" height="21">
                <use href="/sprite.svg#icon-close" />
              </svg>
            </Button>
          </div>

          <NavPanel onLinkClick={onClose} />
        </div>
      </div>
    </div>
  );
}
