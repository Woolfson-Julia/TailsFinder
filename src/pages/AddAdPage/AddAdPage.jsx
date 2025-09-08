import AddAdForm from "../../components/AddAdForm/AddAdForm";
import css from "./AddAdPage.module.css";

const AddAdPage = () => {
  const handleSubmit = async (values) => {
    try {
      // тут можна викликати Redux action або API
      console.log("Form values:", values);
      // await dispatch(createAd(values));
    } catch (error) {
      console.error("Failed to submit ad:", error);
    }
  };

  return (
    <main className={`${css.addAdMain} container`}>
      <section className={`${css.addAdSection} section`}>
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
    </main>
  );
};

export default AddAdPage;
