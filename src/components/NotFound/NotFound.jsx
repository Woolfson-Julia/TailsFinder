import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section style={{ position: "relative", isolation: "isolate" }}>
      <div className={css.container}>
        <div className={css.content}>
          <div className={css.logo}>
            <img width="120" src="/icons/180x180.png" alt="TailsFinder Logo" />
          </div>

          <h1 className={css.title}>TailsFinder</h1>

          <div className={css.errorCode}>404</div>

          <h2 className={css.subtitle}>Оголошення не знайдено</h2>
          <p className={css.description}>
            Вибачте, сталася помилка. Оголошення, яке ви шукаєте, не існує або було
            видалено.
          </p>

          <div className={css.actions}>
            <Link to="/" className={css.primaryButton}>
              Повернутися на головну
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
