import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import {selectRecipesError, selectRecipesLoading } from '../../redux/recipes/selectors';
// import { fetchRecipeById } from '../../redux/recipes/operations';

// import NotFound from '../../components/NotFound/NotFound';
import AdDetails from "../../components/AdDetails/AdDetails";
// import RecipeDetails from '../../components/RecipeDetails/RecipeDetails';
// import Loader from '../../components/Loader/Loader';
import css from "./AdViewPage.module.css";

export default function AdViewPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const recipe = useSelector(selectCurrentRecipe);
  // const error = useSelector(selectRecipesError);
  // const isLoading = useSelector(selectRecipesLoading);

  useEffect(() => {
    // dispatch(fetchRecipeById(id));
  }, [id, dispatch]);
  return (
    <>
      {/* {isLoading && <Loader />}
      {error && <NotFound />} */}
      {/* {recipe && <RecipeDetails recipe={recipe} />} */}
      <AdDetails />
    </>
  );
}
