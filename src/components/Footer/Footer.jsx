import css from "./Footer.module.css";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import logoMobile1x from "../../assets/logo-footer-mobile@1x.png";
import logoTabletDesktop1x from "../../assets/logo-footer-tablet-desktop@1x.png";
import logoMobile2x from "../../assets/logo-footer-mobile@2x.png";
import logoTabletDesktop2x from "../../assets/logo-footer-tablet-desktop@2x.png";

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
        <h2>Контакти</h2>
        <address>
          <p>
            <a href="mailto:support@petsafe.ua">support@tailsfinder.ua</a>
          </p>
          <p>м. Київ, вул. Добрих Сердець, 12</p>
          <p>
            <a href="tel:+3800671234567">+38 (067) 123-45-67</a>
          </p>
        </address>
        <div className={css.containerNavMedia}>
          <p className={css.titleNav}>Швидка навігація</p>
          <nav className={css.nav}>
            <NavLink to="/" className={buildLinkClass}>
              Про нас
            </NavLink>
            <NavLink to="ads" className={buildLinkClass}>
              Їх шукають
            </NavLink>
          </nav>
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
    </footer>
  );
}
