import { Link } from "react-router-dom";
import css from "./AdCard.module.css";




export default function AdCard({ advert }) {
  let status = "";
  if (advert.status === "lost") {
    status = "Загублений";
  } else {
    status = "Знайдений";
  }

  const details = [
    advert.animal.colors.join(", ").toLowerCase(),
    advert.animal.features.toLowerCase(),
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className={css.container}>
      <img
        className={css.image}
        src={advert.photos}
        alt={advert.context.description}
      />
      <div className={css.content}>
        <ul className={css.list}>
          <li className={`${css.item} ${css[advert.status]}`}>{status}</li>
          <li className={css.item}>{advert.animal.species}</li>
          <li className={css.item}>{advert.animal.sex}</li>
          <li className={css.item}>{advert.animal.size}</li>
          {advert.animal.breed && (
            <li className={css.item}>{advert.animal.breed}</li>
          )}
          <li className={css.item}>{advert.animal.colors.join(", ")}</li>
          <li className={css.item}>
            {[advert.context.location.city, advert.context.location.district]
              .filter(Boolean)
              .join(", ")}
          </li>
        </ul>

        <div className={css.titleContainer}>
          <h3 className={css.title}>
            {[advert.animal.species, "(", details, ")"]
              .filter(Boolean)
              .join(" ")}
          </h3>
          <Link to={`/adverts/${advert._id}`} className={css.link}>
            <svg
              className={css.icon}
              width="32"
              height="32"
              aria-label="Перейти на сторінку оголошення"
            >
              <use href="/sprite.svg#icon-arrow-expand"></use>
            </svg>
          </Link>
        </div>
        <p className={css.description}>{advert.context.description}</p>
        <p className={css.date}>
          {" "}
          {new Date(advert.context.date).toLocaleDateString("uk-UA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}

// import css from "./RecipeCard.module.css";
// import Button from "../Button/Button";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch} from "react-redux";
// import { useEffect, useState } from "react";

// import {
//   addRecipeToFav,
//   removeRecipeFromFav,
//   removeOwnRecipes,
//   fetchRecipes,
// } from "../../redux/recipes/operations";

// import {
//   selectIsLoggedIn
// } from "../../redux/auth/selectors";
// import { selectFavoritesRoot } from "../../redux/recipes/selectors";
// import { openModal } from "../../redux/modal/slice";
// import toast from "react-hot-toast";
// import ToastInfo from "../ToastInfo/ToastInfo";

// export default function RecipeCard({
//   recipe,
//   showFavoriteButton = true,
//   showRemoveButton = true,
// }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//    const favoritesRoot = useSelector(selectFavoritesRoot); // это объект { recipes: [...] }

//    const favorites = favoritesRoot?.recipes || []; // безопасно получаем массив избранных

//    const isFavoriteGlobal = favorites.some((fav) => fav._id === recipe._id);

//    const [isFavorite, setIsFavorite] = useState(isFavoriteGlobal);

//   useEffect(() => {
//     setIsFavorite(isFavoriteGlobal);
//   }, [isFavoriteGlobal]);

//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   const handleBtnMore = (id) => {
//     navigate(`/recipes/${id}`);
//   };

//   const handleAddToFavorites = async (id, e) => {
//     e.currentTarget.blur(); // 👈 Убираем фокус с кнопки

//     if (!isLoggedIn) {
//       dispatch(openModal({ modalType: "not-auth" }));
//       return;
//     }
//     try {
//       await dispatch(addRecipeToFav(id)).unwrap();
//       // dispatch(openModal({ modalType: "saved" }));
//       // dispatch(fetchFavorites());
//       // dispatch(fetchRecipes());
//         setIsFavorite(true);
//         dispatch(fetchRecipes());
//       toast.success("Recipe added to favorites!");
//     } catch (error) {
//       console.error("Ошибка при добавлении в избранное", error);
//     }
//   };

//   const handleRemoveFromFavorites = async (id, e) => {
//     e.currentTarget.blur(); // 👈 Убираем фокус с кнопки

//     try {
//       await dispatch(removeRecipeFromFav(id)).unwrap();
//       // dispatch(fetchFavorites());
//       // dispatch(fetchRecipes());
//       setIsFavorite(false);
//      dispatch(fetchRecipes());
//       toast.success("Recipe delete from favorites!");
//     } catch (error) {
//       console.error("Ошибка при удалении из избранного", error);
//     }
//   };

//   const deleteOwnRecipes = async (id) => {
//     try {
//       await dispatch(removeOwnRecipes(id)).unwrap();
//     } catch (error) {
//       console.error("Ошибка при удалении", error);
//     }
//   };

//   return (
//     <div className={css.recipe}>
//       <img src={recipe.thumb} alt={recipe.title} />
//       <div className={css.tittleBox}>
//         <h3 className={css.recipeTittle}>{recipe.title}</h3>
//         <div className={css.time}>
//           <svg width="24" height="24" stroke="currentColor">
//             <use href="/sprite.svg#icon-timeclock-24px" />
//           </svg>
//           {recipe.time}
//         </div>
//       </div>
//       <p className={css.desc}>{recipe.description}</p>
//       <p className={css.cals}>~{recipe.cals} cals</p>

//       <div className={css.buttonBox} style={{ display: "flex" }}>
//         <Button
//           className={css.button}
//           variant="lightButton"
//           type="button"
//           onClick={(e) => handleBtnMore(recipe._id, e)}
//         >
//           Learn More
//         </Button>
//         <div className={css.wrapperCount}>
//           {showFavoriteButton &&
//             (isFavorite ? (
//               <Button
//                 className={css.buttonSvg}
//                 type="button"
//                 onClick={(e) => handleRemoveFromFavorites(recipe._id, e)}
//               >
//                 <svg width="24" height="24" stroke="currentColor">
//                   <use href="/sprite.svg#icon-add-to-favorite-24px" />
//                 </svg>
//               </Button>
//             ) : (
//               <Button
//                 className={css.buttonSvg}
//                 type="button"
//                 onClick={(e) => handleAddToFavorites(recipe._id, e)}
//               >
//                 <svg width="24" height="24" stroke="currentColor">
//                   <use href="/sprite.svg#icon-add-to-favorite-24px" />
//                 </svg>
//               </Button>
//             ))}
//           <div className={css.favoritesCount}>
//             <svg stroke="currentColor" className={css.svgCount}>
//               <use href="/sprite.svg#icon-add-to-favorite-24px" />
//             </svg>
//             <p className={css.f}>{recipe.favoritesCount}</p>
//           </div>
//         </div>
//         {showRemoveButton && (
//           <Button
//             className={css.removeBtn}
//             type="button"
//             onClick={(e) => deleteOwnRecipes(recipe._id, e)}
//           >
//             <svg width="24" height="24" stroke="white">
//               <use href="/sprite.svg#icon-delete-24px" />
//             </svg>
//           </Button>
//         )}
//         <ToastInfo />
//       </div>
//     </div>
//   );
// }
