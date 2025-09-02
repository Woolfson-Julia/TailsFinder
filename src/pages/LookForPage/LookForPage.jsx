import { useEffect } from "react";
import { useDispatch} from "react-redux";

import Filter from "../../components/Filters/Filters";
import AdsList from "../../components/AdsList/AdsList";

import { resetFilters } from "../../redux/filters/slice";

import css from "./LookForPage.module.css";

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    return () => dispatch(resetFilters());
  }, [dispatch]);
  return (
    <>
      <div className="section">
        <div className="container">
          <h2 className={css.title}>Їх шукають</h2>
          <Filter />
          <AdsList />
        </div>
      </div>
    </>
  );
}
