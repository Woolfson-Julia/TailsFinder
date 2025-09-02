import css from "./Logo.module.css";
import logoMobile from "../../assets/logo-mobile@1x.png";
import logoTablet from "../../assets/logo-tablet@1x.png";
import logoDesktop from "../../assets/logo-desktop@1x.png";

import logoMobile2x from "../../assets/logo-mobile@2x.png";
import logoTablet2x from "../../assets/logo-tablet@2x.png";
import logoDesktop2x from "../../assets/logo-desktop@2x.png";




export default function Logo() {
  return (
    <a className={css.link} href="/">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`${logoDesktop} 1x, ${logoDesktop2x} 2x`}
        />
        <source
          media="(min-width: 834px)"
          srcSet={`${logoTablet} 1x, ${logoTablet2x} 2x`}
        />
        <img
          className={css.img}
          src={logoMobile}
          srcSet={`${logoMobile} 1x, ${logoMobile2x} 2x`}
          alt="Logo"
        />
      </picture>
    </a>
  );
}
