import css from "./Info.module.css";

import kittens from "../../assets/info-kittens@1x.png";
import kittens2x from "../../assets/info-kittens@2x.png";
import dogs from "../../assets/info-dogs@1x.png";
import dogs2x from "../../assets/info-dogs@2x.png";

export default function Info() {
  return (
    <div className={css.section}>
      <div className={`${css.container} container`}>
        <ul className={css.list}>
          <li>
            <p className={css.value}>780</p>
            <p className={css.label}>Користувачів знайшли своїх улюленців</p>
          </li>
          <li>
            <p className={css.value}>1000</p>
            <p className={css.label}>Хвостиків повернено додому</p>
          </li>
          <li>
            <p className={css.value}>{">3000"}</p>
            <p className={css.label}>Користувачів у спільноті</p>
          </li>
        </ul>
        <img
          className={css.imgLeft}
          width={239}
          src={kittens}
          srcSet={`
    ${kittens} 1x,
    ${kittens2x} 2x
  `}
          alt="kittens in a basket"
        />
        <img
          className={css.imgRight}
          width={242}
          src={dogs}
          srcSet={`
    ${dogs} 1x,
    ${dogs2x} 2x
  `}
          alt="two dogs in a circle"
        />
      </div>
    </div>
  );
}
