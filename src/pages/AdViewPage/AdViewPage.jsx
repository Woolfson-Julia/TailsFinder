import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



import {
  selectAdvertSelected,
  selectAdvertsLoading,
  selectAdvertsError,
} from "../../redux/adverts/selectors";
import { fetchAdvertById } from "../../redux/adverts/operations";
import Loader from "../../components/Loader/Loader";
import NotFound from '../../components/NotFound/NotFound'
import AdDetails from "../../components/AdDetails/AdDetails";



export default function AdViewPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const ad = useSelector(selectAdvertSelected);
  const isLoading = useSelector(selectAdvertsLoading);
  const isError = useSelector(selectAdvertsError);


  useEffect(() => {
    dispatch(fetchAdvertById(id));
  }, [id, dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      {isError && <NotFound />}
      {ad && <AdDetails ad={ad} />}
    </>
  );
}
