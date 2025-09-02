import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <section className="section">
      <div className={`container ${css.container}`}>
        <div className={css.content}>
          <div className={css.logo}>
            <img src="/icons/180x180.png" alt="TailsFinder Logo" />
          </div>

          <h1 className={css.title}>TailsFinder</h1>

          <div className={css.errorCode}>404</div>

          <h2 className={css.subtitle}>Page not found!</h2>
          <p className={css.description}>
            Sorry, an error has occurred. The page you are looking for does not
            exist or has been moved. The link may be outdated or incorrectly
            typed.
          </p>

          <div className={css.actions}>
            <Link to="/" className={css.primaryButton}>
              Go home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
