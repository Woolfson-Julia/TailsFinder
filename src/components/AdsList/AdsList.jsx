import css from "./AdsList.module.css";


export default function AdsList() { 

  return (
    <ul className={css.list}>
      {/* Map through your ads data and render each ad item */}
    </ul>
  );
}

// import { useEffect, useState, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import css from "./RecipesList.module.css";

// import {
//   selectRecipesError,
//   selectRecipes,
//   selectRecipesLoading,
//   selectRecipesCount,
// } from "../../redux/recipes/selectors";
// import { genericErrorMessage } from "../../redux/recipes/operations";
// import RecipeCard from "../AdCard/AdCard.jsx";
// import {
//   fetchRecipesWithFilters,
//   fetchFavorites,
// } from "../../redux/recipes/operations.js";

// import Loader from "../Loader/Loader.jsx";
// import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";

// import {
//   selectFilter,
//   selectCategory,
//   selectIngredient,
// } from "../../redux/filters/selectors.js";

// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// function RecipesList() {
//   const dispatch = useDispatch();

//   const searchValue = useSelector(selectFilter);
//   const categoryValue = useSelector(selectCategory);
//   const ingredientValue = useSelector(selectIngredient);
//   const recipes = useSelector(selectRecipes);
//   const isLoading = useSelector(selectRecipesLoading);
//   const error = useSelector(selectRecipesError);
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   const recipesCount = useSelector(selectRecipesCount);
//   const hasMore = recipesCount > recipes.length;

//   const [page, setPage] = useState(1);

//   const prevLengthRef = useRef(0);


//   const handleLoadMore = () => {
//     setPage((prev) => prev + 1);
//   };

//   useEffect(() => {
//     setPage((prev) => (prev !== 1 ? 1 : prev));
//   }, [searchValue, categoryValue, ingredientValue, isLoggedIn]);

//   useEffect(() => {
//     dispatch(
//       fetchRecipesWithFilters({
//         title: searchValue,
//         category: categoryValue,
//         ingredient: ingredientValue,
//         page: page,
//       })
//     );

//     if (isLoggedIn) {
//       dispatch(
//         fetchFavorites({
//           category: categoryValue,
//           ingredient: ingredientValue,
//           page: page,
//         })
//       );
//     }
//   }, [dispatch, searchValue, categoryValue, ingredientValue, isLoggedIn, page]);


//   const newItemRef = useRef(null);

//   useEffect(() => {
//     if (
//       page > 1 &&
//       recipes.length > prevLengthRef.current &&
//       newItemRef.current
//     ) {
//       newItemRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     prevLengthRef.current = recipes.length;
//   }, [recipes, page]);

//   return (
//     <>
//       <div className="">
//         {!isLoading && error && <p>{genericErrorMessage}</p>}
//         {!isLoading && !error && recipes.length > 0 && (
//           <ul className={css.list}>
//             {recipes.map((recipe, index) => {
//               const isFirstNew = page > 1 && index === prevLengthRef.current;
//               return (
//                 <li key={recipe._id} ref={isFirstNew ? newItemRef : null}>
//                   <RecipeCard
//                     recipe={recipe}
//                     showRemoveButton={false}
//                   />
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//         {isLoading && <Loader />}
//         {!isLoading && hasMore && !error && (
//           <LoadMoreBtn onClick={handleLoadMore} />
//         )}
//       </div>
//     </>
//   );
// }

// export default RecipesList;
