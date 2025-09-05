import css from "./Footer.module.css";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import logoMobile1x from "../../assets/logo-footer-mobile@1x.png";
import logoTabletDesktop1x from "../../assets/logo-footer-tablet-desktop@1x.png";
import logoMobile2x from "../../assets/logo-footer-mobile@2x.png";
import logoTabletDesktop2x from "../../assets/logo-footer-tablet-desktop@2x.png";
import AddToHomeScreenModal from "../AddToHomeScreenModal/AddToHomeScreenModal";

export default function Footer() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <footer className={css.footer}>
      <div className={`${css.container} container`}>
        <a className={css.linkLogo} href="/">
          <picture>
            <source
              media="(min-width: 834px)"
              srcSet={`${logoTabletDesktop1x} 1x, ${logoTabletDesktop2x} 2x`}
            />
            <img
              className={css.img}
              src={logoMobile1x}
              srcSet={`${logoMobile1x} 1x, ${logoMobile2x} 2x`}
              alt="Logo"
            />
          </picture>
        </a>
        <div className={css.containerContact}>
          <h2>Контакти</h2>
          <address>
            <p className={css.contactItem}>
              <svg
                className={css.iconContact}
                width="24"
                height="24"
                aria-label="icon Person"
              >
                <use href="/sprite.svg#icon-person"></use>
              </svg>
              <a href="mailto:support@petsafe.ua">support@tailsfinder.ua</a>
            </p>
            <p className={css.contactItem}>
              <svg
                className={css.iconLocation}
                width="24"
                height="24"
                aria-label="icon Location"
              >
                <use href="/sprite.svg#icon-location"></use>
              </svg>
              м. Київ, вул. Добрих Сердець, 12
            </p>
            <p className={css.contactItem}>
              <svg
                className={css.iconContact}
                width="24"
                height="24"
                aria-label="icon Call"
              >
                <use href="/sprite.svg#icon-call"></use>
              </svg>
              <a href="tel:+3800671234567">+38 (067) 123-45-67</a>
            </p>
          </address>
        </div>
        <div className={css.containerNavMedia}>
          <div className={css.containerNavigation}>
            <p className={css.titleNav}>Швидка навігація</p>
            <nav className={css.nav}>
              <NavLink to="/" className={buildLinkClass}>
                Про нас
              </NavLink>
              <NavLink to="ads" className={buildLinkClass}>
                Їх шукають
              </NavLink>

              <AddToHomeScreenModal />
            </nav>
          </div>
          <div className={css.containerSocial}>
            <p className={css.titleMedia}>Соціальні мережі:</p>
            <div className={css.containerSocialMedia}>
              <Link to="https://www.instagram.com">
                <svg
                  className={css.iconInstagram}
                  width="24"
                  height="24"
                  aria-label="icon Instagram"
                >
                  <use href="/sprite.svg#icon-instagram"></use>
                </svg>
              </Link>
              <Link to="https://www.facebook.com">
                <svg
                  className={css.icon}
                  width="24"
                  height="24"
                  aria-label="icon Facebook"
                >
                  <use href="/sprite.svg#icon-facebook"></use>
                </svg>
              </Link>
              <Link to="https://www.youtube.com">
                <svg
                  className={css.icon}
                  width="24"
                  height="24"
                  aria-label="icon Youtube"
                >
                  <use href="/sprite.svg#icon-youtube"></use>
                </svg>
              </Link>
              <Link to="https://www.telegram.org">
                <svg
                  className={css.icon}
                  width="24"
                  height="24"
                  aria-label="icon Telegram"
                >
                  <use href="/sprite.svg#icon-telegram"></use>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
