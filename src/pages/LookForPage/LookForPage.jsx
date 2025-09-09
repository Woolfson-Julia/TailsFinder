import { useDispatch, useSelector } from "react-redux";

import css from "./LookForPage.module.css";
import Filter from "../../components/Filters/Filters";
import AdsListForPageLookFor from "../../components/AdsListForPageLookFor/AdsListForPageLookFor";
import Button from "../../components/Button/Button";

import {
  selectAdvertsPagination,
  selectPaginatedAdverts,
} from "../../redux/adverts/selectors";
import { setPage } from "../../redux/adverts/slice";

export default function LookForPage() {
  const filterAds = useSelector(selectPaginatedAdverts);
  const { page, total } = useSelector(selectAdvertsPagination);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <>
      <div className="section">
        <div className={`${css.container} container`}>
          <h2 className={css.title}>Їх шукають</h2>
          <Filter />
          <AdsListForPageLookFor />
          {filterAds.length < total && filterAds.length > 5 && (
            <Button
              type="button"
              className={css.btn}
              variant="darkButton"
              onClick={handleLoadMore}
            >
              Показати ще
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
