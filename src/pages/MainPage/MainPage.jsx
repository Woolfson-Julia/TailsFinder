import css from "./MainPage.module.css";


import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


import { selectIsLoggedIn } from "../../redux/auth/selectors";
import hero from "../../assets/hero@1x.png";
import hero2 from "../../assets/hero@2x.png";
import Info from "../../components/Info/Info";
import HowItWork from "../../components/HowItWork/HowItWork";
import Button from "../../components/Button/Button";

export default function MainPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={`${css.section} section`}>
        <div className={`${css.container} container`}>
          <div className={css.containerContent}>
            <h2 className={css.title}>
              Допомагаємо хвостикам повернутись додому
            </h2>
            <p className={css.text}>
              Кожного дня сотні тварин губляться. Ми створили{" "}
              <span className={css.span}>TailsFinder</span> — сервіс, де люди
              об&#39;єднуються, щоб швидше знаходити своїх улюбленців.
            </p>
          </div>
          <img
            src={hero}
            srcSet={`${hero} 1x, ${hero2} 2x`}
            className={css.heroImg}
            alt="dog at laptop"
          />
          <div className={css.buttonContainer}>
            <NavLink to={isLoggedIn ? "/find-pet" : "/auth/register"}>
              <Button
                type="button"
                variant="darkButton"
                className={css.btnFind}
              >
                Знайти тварину
              </Button>
            </NavLink>
            <NavLink to={isLoggedIn ? "/return-home" : "/auth/register"}>
              <Button
                type="button"
                variant="lightButton"
                className={css.btnReturn}
              >
                Повернути додому
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <Info />
      <HowItWork />
    </>
  );
}
