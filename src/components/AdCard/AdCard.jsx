import { Link } from "react-router-dom";
import css from "./AdCard.module.css";




export default function AdCard({ advert }) {

  const statusClassMap = {
    Загублено: "lost",
    Знайдено: "found",
  };
  const statusClass = statusClassMap[advert.status] || "";

  const details = [
    advert.animal.colors.join(", ").toLowerCase(),
    advert.animal.features.toLowerCase(),
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <Link className={css.container} to={`/ads/${advert._id}`}>
      <img
        className={css.image}
        src={advert.photos[0]}
        height={362}
        alt={advert.context.description}
      />
      <div className={css.content}>
        <ul className={css.list}>
          <li className={`${css.item} ${css[statusClass]}`}>{advert.status}</li>
          <li className={css.item}>{advert.animal.species}</li>
          <li className={css.item}>{advert.animal.sex}</li>
          <li className={css.item}>{advert.animal.size}</li>
          {advert.animal.breed && (
            <li className={css.item}>{advert.animal.breed}</li>
          )}
          <li className={css.item}>{advert.animal.colors.join(", ")}</li>
          <li className={css.item}>
            {[advert.context.location.city, advert.context.location.district]
              .filter(Boolean)
              .join(", ")}
          </li>
        </ul>

        <div className={css.titleContainer}>
          <h3 className={css.title}>
            {[advert.animal.species, "(", details, ")"]
              .filter(Boolean)
              .join(" ")}
          </h3>
          <div className={css.link}>
            <svg
              className={css.icon}
              width="32"
              height="32"
              aria-label="Перейти на сторінку оголошення"
            >
              <use href="/sprite.svg#icon-arrow-expand"></use>
            </svg>
          </div>
        </div>
        <p className={css.description}>{advert.context.description}</p>
        <p className={css.date}>
          {" "}
          {new Date(advert.context.date).toLocaleDateString("uk-UA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}