import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddAdForm from "../../components/AddAdForm/AddAdForm";
import { createAdvert } from "../../redux/adverts/operations";
import css from "./AddAdPage.module.css";

const AddAdPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      values.photos.forEach((file) => formData.append("photos", file));

      formData.append("status", values.status);
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

      formData.append("notificationsAllowed", values.notificationsAllowed);

      console.log("FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const response = await dispatch(createAdvert(formData)).unwrap();
      console.log("Ad created successfully:", response);

      navigate("/ads");
    } catch (error) {
      console.error("Failed to submit ad:", error);
    }
  };

  return (
    <div className={`${css.addAdMain} container`}>
      <section className={`${css.addAdSection} section`}>
        <h2 className={css.addAdTitle}>Додати оголошення</h2>
        <p className={css.addAdTxt}>
          Заповніть просту форму. Це допоможе швидше знайти улюбленця або його
          дім
        </p>
        <AddAdForm onSubmit={handleSubmit} />
      </section>

      <aside className={`${css.addAdAside}`}>
        <div className={`${css.addAdAsideContent}`}>
          <h3 className={`${css.addAdAsideTitle}`}>Як це працює</h3>
          <ul className={`${css.addAdAsideList}`}>
            <li>Щоб додати оголошення про тваринку, заповніть просту форму.</li>
            <li>Це допоможе швидше знайти улюбленця або його новий дім.</li>
            <li>Укажіть основні дані.</li>
            <li>
              Чим детальніше ви опишете тваринку, тим більше шансів, що її
              швидше впізнають і допоможуть.
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default AddAdPage;
