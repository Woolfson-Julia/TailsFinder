import css from './FiltersForm.module.css';
import { nanoid } from "nanoid";


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


  return (
    <form className={css.form}>
      <select
        name="status"
        defaultValue=""
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
        defaultValue=""
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
        defaultValue=""
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
        defaultValue=""
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