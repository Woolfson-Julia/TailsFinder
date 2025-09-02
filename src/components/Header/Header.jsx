import { useState, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";
import Logo from "../Logo/Logo.jsx";
import NavPanel from "../NavPanel/NavPanel.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import css from "./Header.module.css";
import Button from "../Button/Button.jsx";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 833.98px)");

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={css.header}>
        <div className={`container ${css.wrapper}`}>
          <Logo />

          {isMobile ? (
            <Button
              onClick={openMobileMenu}
              className={css.btnSvg}
              type="button"
              aria-label="Open mobile menu"
            >
              <svg className={css.icon} width="36" height="26">
                <use href="/sprite.svg#icon-burger" />
              </svg>
            </Button>
          ) : (
            <div className={css.desktopTabletNav}>
              <NavPanel />
            </div>
          )}
        </div>
        {isMobile && isMobileMenuOpen && (
          <MobileMenu onClose={closeMobileMenu} />
        )}
      </header>
    </>
  );
}
