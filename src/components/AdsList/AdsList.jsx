import css from "./AdsList.module.css";

import {
  selectAdvertsLatest,
  selectAdvertsLoading,
  selectAdvertsError,
} from "../../redux/adverts/selectors";
import { fetchLatestAdverts } from "../../redux/adverts/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdCard from "../AdCard/AdCard.jsx";
import Loader from "../Loader/Loader.jsx";
import ToastInfo from "../ToastInfo/ToastInfo.jsx";


export default function AdsList() {
  const adverts = useSelector(selectAdvertsLatest);
  const isLoading = useSelector(selectAdvertsLoading);
  const isError = useSelector(selectAdvertsError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestAdverts());
  }, [dispatch]);

  return (
    <>
        <ul className={css.list}>
          {adverts.map((ad) => (
            <AdCard key={ad._id} advert={ad} />
          ))}
        </ul>
      {isLoading && <Loader />}
      {isError && <ToastInfo />}
    </>
  );
}
