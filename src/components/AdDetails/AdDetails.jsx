import css from "./AdDetails.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../Button/Button";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { fetchUserPhone } from "../../redux/utils/fetchUserPhone.js";
import { useNavigate } from "react-router-dom";
export default function AdDetails({ ad }) {
  const [showPhone, setShowPhone] = useState(false);
  const [phone, setPhone] = useState("");

const statusClassMap = {
  Загублено: "lost",
  Знайдено: "found",
};
const statusClass = statusClassMap[ad.status] || "";

  const details = [
    ad.animal.colors.join(", ").toLowerCase(),
    ad.animal.features.toLowerCase(),
  ]
    .filter(Boolean)
    .join(", ");

  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleShow = async () => {
    if (!isLoggedIn) {
      navigate("/auth/register");
    } else {
      try {
        const phoneById = await fetchUserPhone(ad.user._id);
        setPhone(phoneById);
        setShowPhone(true);
      } catch (error) {
        console.error("Помилка отримання номеру телефону:", error);
      }
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
              className={index === 0 ? css.bigItem : css.smallItem}
            >
              <img
                className={index === 0 ? css.bigImg : css.smallImg}
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
            <li className={`${css.item} ${css[statusClass]}`}>{ad.status}</li>
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
            {showPhone ? phone : "Зв'язатися з автором"}
          </Button>
        </div>
      </div>
    </section>
  );
}
