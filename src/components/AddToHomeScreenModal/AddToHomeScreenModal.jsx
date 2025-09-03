import { useState } from "react";
import css from "./AddToHomeScreenModal.module.css";
import Button from "../Button/Button";

export default function AddToHomeScreenModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={css.openBtn} onClick={() => setIsOpen(true)}>
        Додати на головний екран
      </button>

      {isOpen && (
        <div className={css.backdrop} onClick={() => setIsOpen(false)}>
          <div className={css.modal} onClick={(e) => e.stopPropagation()}>
            <h2 className={css.title}>Додати TailsFinder на головний екран</h2>
            <p className={css.text}>
              Щоб завжди мати швидкий доступ до TailsFinder:
            </p>

            <div className={css.instructions}>
              <h3 className={css.titleInstructions}>Android</h3>
              <ol>
                <li className={css.item}>Відкрийте сайт у браузері Chrome.</li>
                <li className={css.item}>
                  Натисніть{" "}
                  <strong>
                    меню <span className={css.menuIcon}>⋮</span> (три крапки)
                  </strong>{" "}
                  у правому верхньому куті.
                </li>
                <li className={css.item}>
                  Оберіть <strong>«Додати на головний екран»</strong>.
                </li>
              </ol>

              <h3 className={css.titleInstructions}>iPhone / iPad</h3>
              <ol>
                <li className={css.item}>Відкрийте сайт у Safari.</li>
                <li className={css.item}>
                  Натисніть кнопку <strong>«Поділитися»</strong> знизу.
                </li>
                <li className={css.item}>
                  Оберіть <strong>«На екран Домашній»</strong>.
                </li>
              </ol>
            </div>
            <Button
              className={css.closeBtn}
              variant="darkButton"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Закрити
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
