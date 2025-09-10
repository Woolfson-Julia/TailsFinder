import { useDispatch, useSelector } from "react-redux";

import css from "./AdsListForPageLookFor.module.css";

import {
  selectPaginatedAdverts,
  selectAdvertsPagination,
  selectAdvertsLoading,
  selectAdvertsError,

} from "../../redux/adverts/selectors";
import { fetchAdverts } from "../../redux/adverts/operations";
import { useEffect } from "react";
import AdCard from "../AdCard/AdCard";
import Loader from "../Loader/Loader";
import ToastInfo from "../ToastInfo/ToastInfo";


export default function AdsListForPageLookFor() {
  const isLoading = useSelector(selectAdvertsLoading);
  const isError = useSelector(selectAdvertsError);
  const { page, perPage } = useSelector(selectAdvertsPagination);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts({ page, perPage }));
  }, [dispatch,page, perPage]);

  const filterAds = useSelector(selectPaginatedAdverts);

  
  return (
    <>
      {!isLoading && filterAds.length === 0 && !isError ? (
        <p className={css.text}>Оголошень за данними критеріями немає</p>
      ) : (
        <ul className={css.list}>
          {filterAds.map((ad) => (
            <AdCard key={ad._id} advert={ad} />
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      <ToastInfo />
    </>
  );
}
