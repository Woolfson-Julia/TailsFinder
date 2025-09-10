import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  selectColors,
  selectSex,
  selectSize,
  selectSpecies,
  selectStatus,
} from "../../redux/enums/selectors.js";

registerLocale("uk", uk);

const AddAdForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEnumOptions());
  }, [dispatch]);

  const speciesOptions = useSelector(selectSpecies);
  const colorOptions = useSelector(selectColors);
  const sexOptions = useSelector(selectSex);
  const sizeOptions = useSelector(selectSize);
  const statusOptions = useSelector(selectStatus);

  return (
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
      onSubmit={(values) => {
        console.log("Formik onSubmit called!", values);
        onSubmit(values);
      }}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className={css.addAdForm}>
          {/* Dropdowns */}
          <div className={css.addAdFormDropdowns}>
            <Field
              as="select"
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
            <Field
              as="select"
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
            <Field
              as="select"
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
            <Field
              as="select"
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
              className={css.addAdFormErrTxt}
            />
          </div>

          <div className={css.addAdFormColorsSelect}>
            <label>Забарвлення</label>
            <ColorsSelect name="colors" options={colorOptions} />
            <ErrorMessage name="colors" component="div" className="error" />
          </div>

          {/* Date & Time Picker */}
          <div className={css.addAdFormDate}>
            <label className={css.addAdFormLbl}>Дата та час події</label>
            <DatePicker
              selected={values.date}
              onChange={(date) => setFieldValue("date", date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              className={css.addAdFormDateInput}
              placeholderText="Оберіть дату та час"
              withPortal
              locale="uk"
            />
            <ErrorMessage
              name="date"
              component="div"
              className={css.addAdFormErrTxt}
            />
          </div>

          {/* Description */}
          <div className={css.addAdFormDescr}>
            <label className={css.addAdFormLbl}>Опис</label>
            <Field
              as="textarea"
              name="description"
              rows="3"
              className={css.addAdFormDescrTxt}
            />
            <ErrorMessage
              name="description"
              component="div"
              className={css.addAdFormErrTxt}
            />
          </div>

          {/* Location */}
          <div className={css.addAdFormLoc}>
            <label className={css.addAdFormLbl}>Локація</label>
            <LocationPicker
              value={values.location}
              onChange={(loc) => setFieldValue("location", loc)}
            />
            <ErrorMessage
              name="location.lat"
              component="div"
              className={css.addAdFormErrTxt}
            />
            <ErrorMessage
              name="location.lng"
              component="div"
              className={css.addAdFormErrTxt}
            />
          </div>

          {/* Photos Picker*/}
          <div className={css.addAdFormPhotos}>
            <FilePicker name="photos" label="Фото" multiple={true} />
          </div>

          {/* Checkbox */}
          <div className={css.addAdFormCheckbox}>
            <Field type="checkbox" name="notificationsAllowed" />
            <label className={css.addAdFormCheckbox}>
              Погоджуюсь отримувати повідомлення на Email щодо мого оголошення
            </label>
          </div>

          {/* Buttons */}
          <div className={css.addAdFormBtns}>
            <Button
              variant="lightButton"
              className={css.addAdFormBackBtn}
              onClick={() => window.history.back()}
            >
              Назад
            </Button>
            <Button
              variant="darkButton"
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
  );
};

export default AddAdForm;
