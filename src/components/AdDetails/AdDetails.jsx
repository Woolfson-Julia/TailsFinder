import css from "./AdDetails.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import { selectIsLoggedIn, selectUserInfo } from "../../redux/auth/selectors";
import { useNavigate } from "react-router-dom";
export default function AdDetails({ ad }) {
  let status = "";
  if (ad.status === "lost") {
    status = "Загублений";
  } else {
    status = "Знайдений";
  }

  const details = [
    ad.animal.colors.join(", ").toLowerCase(),
    ad.animal.features.toLowerCase(),
  ]
    .filter(Boolean)
    .join(", ");

  const navigate = useNavigate();

  const user = useSelector(selectUserInfo);
  console.log(user);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleShow = () => {
    if (!isLoggedIn) {
      navigate("/auth/register");
    } else {
      console.log("hello");
    }
  };
  return (
    <section className={css.section}>
      <div className={`container ${css.container}`}>
        <div className={css.backContainer}>
          <Link to="/" className={css.backBtn}>
            <svg
              className={css.icon}
              width="24"
              height="24"
              aria-label="Перейти на сторінку оголошення"
            >
              <use href="/sprite.svg#icon-arrow-left"></use>
            </svg>
            Повернутися назад
          </Link>
        </div>
        <ul className={css.listImg}>
          {ad.photos.map((p, index) => (
            <li
              key={index}
              className={index === 0 ? css.bidItem : css.smallItem}
            >
              <img
                className={index === 0 ? css.bidImg : css.smalImg}
                src={p}
                alt={ad.context.description}
              />
            </li>
          ))}
        </ul>

        <div className={css.titleContainer}>
          <h3 className={css.title}>
            {[ad.animal.species, "(", details, ")"].filter(Boolean).join(" ")}
          </h3>
          <ul className={css.list}>
            <li className={`${css.item} ${css[ad.status]}`}>{status}</li>
            <li className={css.item}>{ad.animal.species}</li>
            <li className={css.item}>{ad.animal.sex}</li>
            <li className={css.item}>{ad.animal.size}</li>
            {ad.animal.breed && <li className={css.item}>{ad.animal.breed}</li>}
            <li className={css.item}>{ad.animal.colors.join(", ")}</li>
            <li className={css.item}>
              {[ad.context.location.city, ad.context.location.district]
                .filter(Boolean)
                .join(", ")}
            </li>
          </ul>
        </div>

        <h3 className={css.titleSecond}>Опис:</h3>
        <p className={css.description}>{ad.context.description}</p>
        <div className={css.contact}>
          <div className={css.contactContainer}>
            <p className={css.name}>{ad.user.name}</p>
            <p className={css.date}>
              {" "}
              {new Date(ad.context.date).toLocaleDateString("uk-UA", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
          <Button
            className={css.btnNumber}
            type="button"
            variant="darkButton"
            onClick={handleShow}
          >
            Зв&apos;язатися з автором
          </Button>
        </div>
      </div>
    </section>
  );
}
