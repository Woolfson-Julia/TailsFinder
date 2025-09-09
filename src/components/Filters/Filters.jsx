import css from "./Filters.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import {
  selectSpecies,
  selectStatuses,
  selectDistriects,
  selectCities,
  selectFilters,
} from "../../redux/filters/selectors";
import {
  changeSelectedStatusFilter,
  changeSelectedSpeciesFilter,
  changeSelectedCityFilter,
  changeSelectedDistrictFilter,
  resetFilters,
} from "../../redux/filters/slice";
import { fetchFilters } from "../../redux/filters/operations";


import FiltersForm from "../FiltersForm/FiltersForm";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";



export default function Filters() {


  const isMobile = useMediaQuery("(max-width: 833.99px)");

  const [open, setOpen] = useState(false);

  const species = useSelector(selectSpecies);
  const statuses = useSelector(selectStatuses);
  const cities = useSelector(selectCities);
  const districts = useSelector(selectDistriects);
  const filters = useSelector(selectFilters);
  const filtersMap = {
    status: "selectedStatus",
    specie: "selectedSpecies",
    city: "selectedCity",
    district: "selectedDistrict",
  };

  const dispatch = useDispatch();

  const handleStatusesChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeSelectedStatusFilter(filterValue));
  };

  const handleSpeciesChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeSelectedSpeciesFilter(filterValue));
  };
  const handleCitiesChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeSelectedCityFilter(filterValue));
  };
  const handleDistrictsChange = (e) => {
    const filterValue = e.target.value;
    dispatch(changeSelectedDistrictFilter(filterValue));
  };


    const handleReset = (filterKey) => {
      dispatch(resetFilters(filterKey));
  };
  
const handleResetAll = () => {
  dispatch(resetFilters());
  
};

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  
  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open]);



  return (
    <div className={css.section}>
      <div className={css.filtersContainer}>
        {isMobile ? (
          <>
            {open ? (
              <div className={css.mobileBackdrop}>
                <div className={css.wrapper}>
                  <div className={css.topBar}>
                    <Logo />
                    <Button
                      onClick={handleClose}
                      className={css.btnSvg}
                      variant="none"
                      type="button"
                      aria-label="Close mobile menu"
                    >
                      <svg className={css.icon} width="21" height="21">
                        <use href="/sprite.svg#icon-close" />
                      </svg>
                    </Button>
                  </div>
                  <div className={css.form}>
                    <FiltersForm
                      statuses={statuses}
                      cities={cities}
                      districts={districts}
                      species={species}
                      filters={filters}
                      handleStatusesChange={handleStatusesChange}
                      handleCitiesChange={handleCitiesChange}
                      handleSpeciesChange={handleSpeciesChange}
                      handleDistrictsChange={handleDistrictsChange}
                    />
                    <Button
                      type="button"
                      variant="darkButton"
                      className={css.btnShow}
                      onClick={handleClose}
                    >
                      Показати оголошення
                    </Button>
                    <Button
                      type="button"
                      variant="none"
                      className={css.btnResetAll}
                      onClick={handleResetAll}
                    >
                      Очистити фільтр
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className={css.btnIcon}
                type="button"
                aria-label="Відкрити фільтр по оголошенням"
                onClick={handleOpen}
              >
                <svg
                  className={css.iconFilter}
                  width={24}
                  height={24}
                  aria-label="Відкрити фільтр по оголошенням"
                >
                  <use href="/sprite.svg#icon-filter"></use>
                </svg>
              </button>
            )}
          </>
        ) : (
          <div className={css.filtersForm}>
            <FiltersForm
              statuses={statuses}
              cities={cities}
              districts={districts}
              species={species}
              filters={filters}
              handleStatusesChange={handleStatusesChange}
              handleCitiesChange={handleCitiesChange}
              handleSpeciesChange={handleSpeciesChange}
              handleDistrictsChange={handleDistrictsChange}
            />
          </div>
        )}
      </div>
      <div className={css.optionsContainer}>
        <ul className={css.list}>
          {Object.entries(filters).map(
            ([key, value]) =>
              value && (
                <li key={key} className={css.item}>
                  <button
                    type="button"
                    className={css.btn}
                    aria-label="Скинути фільтр до початкового значення"
                    onClick={() => handleReset(filtersMap[key])}
                  >
                    {value === "lost"
                      ? "Загублений"
                      : value === "found"
                      ? "Знайденний"
                      : value}
                    <svg
                      className={css.icon}
                      width="12"
                      height="12"
                      aria-label="Скинути фільтр до початкового значення"
                    >
                      <use href="/sprite.svg#icon-close"></use>
                    </svg>
                  </button>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
