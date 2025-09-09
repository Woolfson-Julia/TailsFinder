import { selectSelectedCity, selectSelectedDistrict, selectSelectedSpecies, selectSelectedStatus } from '../../redux/filters/selectors';
import css from './FiltersForm.module.css';
import { nanoid } from "nanoid";
import { useSelector } from 'react-redux';

export default function FiltersForm({
  statuses,
  cities,
  districts,
  species,
  handleStatusesChange,
  handleSpeciesChange,
  handleCitiesChange,
  handleDistrictsChange
}) {

  const selectedStatus = useSelector(selectSelectedStatus);
  const selectedSpecies = useSelector(selectSelectedSpecies);
  const selectedCity = useSelector(selectSelectedCity);
  const selectedSDistrict = useSelector(selectSelectedDistrict);
  return (
    <form className={css.form}>
      <select
        name="status"
        value={selectedStatus}
        className={css.select}
        onChange={handleStatusesChange}
      >
        <option value="" className={css.option} disabled>
          Статус
        </option>
        {statuses.map((status) => (
          <option key={nanoid()} value={status} className={css.option}>
            {status === "lost" ? "Загублений" : "Знайдений"}
          </option>
        ))}
      </select>
      <select
        name="species"
        value={selectedSpecies}
        className={css.select}
        onChange={handleSpeciesChange}
      >
        <option value="" className={css.option} disabled>
          Тварина
        </option>
        {species.map((specie) => (
          <option key={nanoid()} value={specie} className={css.option}>
            {specie}
          </option>
        ))}
      </select>
      <select
        name="cities"
        value={selectedCity}
        className={css.select}
        onChange={handleCitiesChange}
      >
        <option value="" className={css.option} disabled>
          Місто
        </option>
        {cities.map((city) => (
          <option key={nanoid()} value={city} className={css.option}>
            {city}
          </option>
        ))}
      </select>
      <select
        name="districts"
        value={selectedSDistrict}
        className={css.select}
        onChange={handleDistrictsChange}
      >
        <option value="" className={css.option} disabled>
          Район
        </option>
        {districts.map((district) => (
          <option key={nanoid()} value={district} className={css.option}>
            {district}
          </option>
        ))}
      </select>
    </form>
  );
}