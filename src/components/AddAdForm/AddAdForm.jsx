import { useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./AddAdForm.module.css";
import { validationSchema } from "./validationScheme.js";
import { LocationPicker } from "../LocationPicker/LocationPicker";
import FilePicker from "../FilePicker/FilePicker";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button.jsx";
import ColorsSelect from "../ColorSelect/ColorsSelect.jsx";
import { fetchEnumOptions } from "../../redux/enums/operations.js";
import { createAdvert } from "../../redux/adverts/operations";

import {
  selectColors,
  selectSex,
  selectSize,
  selectSpecies,
  selectStatus,
} from "../../redux/enums/selectors.js";

registerLocale("uk", uk);

const AddAdForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photosId = useId();
  const statusId = useId();
  const speciesId = useId();
  const colorsId = useId();
  const sexId = useId();
  const sizeId = useId();
  const descriptionId = useId();
  const locationId = useId();
  const dateId = useId();
  const notificationsId = useId();

  const speciesOptions = useSelector(selectSpecies);
  const colorOptions = useSelector(selectColors);
  const sexOptions = useSelector(selectSex);
  const sizeOptions = useSelector(selectSize);
  const statusOptions = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchEnumOptions());
  }, [dispatch]);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();

      values.photos.forEach((file) => formData.append("photos", file));

      formData.append("status", values.status);
      formData.append("species", values.species);
      formData.append("sex", values.sex);
      formData.append("size", values.size);
      formData.append("description", values.description);
      if (values.breed) formData.append("breed", values.breed);
      if (values.features) formData.append("features", values.features);

      formData.append("colors", JSON.stringify(values.colors));

      formData.append(
        "location",
        JSON.stringify([values.location.lng, values.location.lat])
      );

      formData.append("date", values.date.toISOString());

      formData.append(
        "notificationsAllowed",
        values.notificationsAllowed.toString()
      );

      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await dispatch(createAdvert(formData))
        .unwrap()
        .then(() => {
          console.log("Ad created successfully:", response);
          resetForm();
          navigate("/");
        });
    } catch (error) {
      console.error("Failed to submit ad:", error);
    }
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={{
          photos: [],
          status: "",
          species: "",
          colors: [],
          sex: "",
          size: "",
          description: "",
          location: { lat: null, lng: null },
          date: null,
          notificationsAllowed: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Formik onSubmit called!", values);
          handleSubmit(values, { setSubmitting, resetForm });
        }}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className={css.addAdForm}>
            {/* Dropdowns */}
            <div className={css.addAdFormDropdowns}>
              <div className={css.addAdSelectWrapper}>
                <label
                  htmlFor={statusId}
                  className={`${css.addAdFormLbl} ${css.srOnly}`}
                >
                  Статус
                </label>
                <Field
                  as="select"
                  id={statusId}
                  name="status"
                  className={css.addAdFormDropdownsSelect}
                >
                  <option value="">Статус</option>
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.addAdSelectWrapper}>
                <label
                  htmlFor={speciesId}
                  className={`${css.addAdFormLbl} ${css.srOnly}`}
                >
                  Тварина
                </label>
                <Field
                  as="select"
                  id={speciesId}
                  name="species"
                  className={css.addAdFormDropdownsSelect}
                >
                  <option value="">Тварина</option>
                  {speciesOptions.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="species"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.addAdSelectWrapper}>
                <label
                  htmlFor={sexId}
                  className={`${css.addAdFormLbl} ${css.srOnly}`}
                >
                  Стать
                </label>
                <Field
                  as="select"
                  id={sexId}
                  name="sex"
                  className={css.addAdFormDropdownsSelect}
                >
                  <option value="">Стать</option>
                  {sexOptions.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="sex"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.addAdSelectWrapper}>
                <label
                  htmlFor={sizeId}
                  className={`${css.addAdFormLbl} ${css.srOnly}`}
                >
                  Розмір
                </label>
                <Field
                  as="select"
                  id={sizeId}
                  name="size"
                  className={css.addAdFormDropdownsSelect}
                >
                  <option value="">Розмір</option>
                  {sizeOptions.map((sz) => (
                    <option key={sz} value={sz}>
                      {sz}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="size"
                  component="div"
                  className={css.error}
                />
              </div>
            </div>
            {/* Colors Picker */}
            <div className={css.addAdFormSelectors}>
              <div className={css.addAdFormColorsSelect}>
                <label
                  htmlFor={colorsId}
                  className={`${css.addAdFormLbl} ${css.srOnly}`}
                >
                  Забарвлення
                </label>
                <ColorsSelect
                  id={colorsId}
                  name="colors"
                  options={colorOptions}
                />
                <ErrorMessage
                  name="colors"
                  component="div"
                  className={css.error}
                />
              </div>
              {/* Date & Time Picker */}
              <div className={css.addAdFormDate}>
                <label htmlFor={dateId} className={css.addAdFormLbl}>
                  Дата та час події
                </label>
                <DatePicker
                  id={dateId}
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy HH:mm"
                  className={css.addAdFormDateInput}
                  withPortal
                  locale="uk"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className={css.error}
                />
              </div>
            </div>
            {/* Description */}
            <div className={css.addAdFormDescr}>
              <label htmlFor={descriptionId} className={css.addAdFormLbl}>
                Опис
              </label>
              <Field
                as="textarea"
                id={descriptionId}
                name="description"
                rows="3"
                className={css.addAdFormDescrTxt}
              />
              <ErrorMessage
                name="description"
                component="div"
                className={css.error}
              />
            </div>
            {/* Location */}
            <div className={css.addAdFormLoc}>
              <label htmlFor={locationId} className={css.addAdFormLbl}>
                Локація
              </label>
              <LocationPicker
                id={locationId}
                value={values.location}
                onChange={(loc) => setFieldValue("location", loc)}
              />
              <ErrorMessage
                name="location"
                component="div"
                className={css.error}
              />
            </div>
            {/* Photos Picker*/}
            <div className={css.addAdFormPhotos}>
              <label htmlFor={photosId} className={css.addAdFormLbl}>
                Фото
              </label>
              <FilePicker id={photosId} name="photos" multiple={true} />
              <ErrorMessage
                name="photos"
                component="div"
                className={css.error}
              />
            </div>
            {/* Checkbox */}
            <div className={css.addAdFormCheckbox}>
              <label
                htmlFor={notificationsId}
                className={css.addAdFormCheckboxLbl}
              >
                <Field
                  id={notificationsId}
                  type="checkbox"
                  name="notificationsAllowed"
                />
                <span className={css.addAdFormCheckboxTxt}>
                  Погоджуюсь отримувати повідомлення на Email щодо мого
                  оголошення
                </span>
              </label>
            </div>
            {/* Buttons */}
            <div className={css.addAdFormBtns}>
              <Button
                variant={"lightButton"}
                className={css.addAdFormBackBtn}
                onClick={() => window.history.back()}
              >
                Назад
              </Button>
              <Button
                variant={"darkButton"}
                type="submit"
                disabled={isSubmitting}
                className={css.addAdFormSubmitBtn}
              >
                Додати оголошення
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAdForm;
