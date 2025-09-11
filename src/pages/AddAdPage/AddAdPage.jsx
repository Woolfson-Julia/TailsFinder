import AddAdForm from "../../components/AddAdForm/AddAdForm";
import css from "./AddAdPage.module.css";

const AddAdPage = () => {
  return (
    <div className={"container"}>
      <div className={css.addAdMain}>
        <div className={`${css.addAdSection} section`}>
          <h2 className={css.addAdTitle}>Додати оголошення</h2>
          <p className={css.addAdTxt}>
            Заповніть просту форму. Це допоможе швидше знайти улюбленця або його
            дім
          </p>
          <AddAdForm />
        </div>

        <aside className={`${css.addAdAside}`}>
          <div className={`${css.addAdAsideContent}`}>
            <h3 className={`${css.addAdAsideTitle}`}>Як це працює</h3>
            <ul className={`${css.addAdAsideList}`}>
              <li>
                Щоб додати оголошення про тваринку, заповніть просту форму.
              </li>
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
    </div>
  );
};

export default AddAdPage;
