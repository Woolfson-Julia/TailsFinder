import css from "./LookFor.module.css";

import AdsList from "../AdsList/AdsList";
import { Link } from "react-router-dom";

export default function LookFor() {
  return (
    <div className={`${css.section} section`}>
      <div className={`${css.container} container`}>
        <div className={css.content}>
          <h2 className={css.title}>Їх шукають</h2>
          <AdsList />
        </div>
        <Link to="/ads" className={css.btn}>
          Дивитися більше
        </Link>
      </div>
    </div>
  );
}