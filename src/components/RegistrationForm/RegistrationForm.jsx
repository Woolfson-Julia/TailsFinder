import css from "./RegistrationForm.module.css";

import { Formik, Form, Field } from "formik";
import { Link, useNavigate  } from "react-router-dom";


import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLoading, selectError } from "../../redux/auth/selectors";

import { validationSchema } from "./validationSchema";
import { register } from "../../redux/auth/operations";
import FixedErrorMessage from "./FixedErrorMessage";


import Button from "../Button/Button";
import ToastInfo from "../ToastInfo/ToastInfo";
import Loader from "../Loader/Loader";

export default function RegistrationForm() {
  const nameFieldId = useId();
  const telFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const privacyPolicyId = useId();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

    const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
      console.log("Submitting form..."); // <--- лог для перевірки
    const { name, email, password, tel } = values;
    const valuesToSend = {
      name,
      email,
      password,
      tel
    };
  dispatch(register(valuesToSend))
    .unwrap()
    .then(() => {
      actions.resetForm();  // скидання форми тільки після успіху
      navigate("/");        // переходимо на головну або профіль
    })
    .catch((err) => {
      console.error("Помилка реєстрації:", err);
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`container`}>
          <div className={css.registerWrapper}>

            <div>
            <button
              type="button"
              className={css.backButton}
              onClick={() => navigate(-1)}
            > ←<span className={css.BackBut}> Повернутися назад</span>
            </button>

            <h1 className={css.title}>Зареєструватися</h1>
            <p className={css.loginPrompt}>
              Вже маєте акаунт?{" "}
              <Link to="/auth/login" className={css.loginLink}>Увійдіть.</Link>
            </p>
            
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                checkPassword: "",
                tel: "",
                acceptedTerms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnBlur={false}
              validateOnChange={true}
            >
              <Form>
                <label htmlFor={nameFieldId} className={css.inputLabel}>
                  Ім'я
                </label>
                <Field
                  className={css.inputField}
                  id={nameFieldId}
                  type="text"
                  name="name"
                  placeholder="Катерина"
                ></Field>
                <FixedErrorMessage
                  name="name"
                  className={css.error}
                ></FixedErrorMessage>

                <label htmlFor={telFieldId} className={css.inputLabel}>
                  Телефон
                </label>
                <Field
                  className={css.inputField}
                  id={telFieldId}
                  type="text"
                  name="tel"
                  placeholder="+38(095)-24-167-95"
                ></Field>
                <FixedErrorMessage
                  name="tel"
                  className={css.error}
                ></FixedErrorMessage>

                <label htmlFor={emailFieldId} className={css.inputLabel}>
                  Email
                </label>
                <Field
                  className={css.inputField}
                  id={emailFieldId}
                  type="email"
                  name="email"
                  placeholder="email@gmail.com"
                ></Field>
                <FixedErrorMessage
                  name="email"
                  className={css.error}
                ></FixedErrorMessage>

                <label htmlFor={passwordFieldId} className={css.inputLabel}>
                  Пароль
                </label>
                <Field
                    className={css.inputField}
                    id={passwordFieldId}
                    type={"password"}
                    name="password"
                    placeholder="********"
                ></Field>
                <FixedErrorMessage
                  name="password"
                  className={css.error}
                ></FixedErrorMessage>

                <label htmlFor={privacyPolicyId} className={css.checkBoxLabel}>
                <Field
                  type="checkbox"
                  name="acceptedTerms"
                  id={privacyPolicyId}
                  className={css.checkBox}
                />
                <span className={css.span}>
                  Погоджуюся з умовами користування та{" "}
                  <a href="#" className={css.termsLink}>
                    політикою конфіденційності
                  </a>
                </span>
                </label>
                <FixedErrorMessage
                  name="acceptedTerms"
                  className={css.errorCheck}
                ></FixedErrorMessage>

                <label htmlFor="newsletter" className={css.checkBoxLabel2}>
                <Field
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  className={css.checkBox}
                />
                <span className={css.span}>Погоджуюся отримувати розсилку на Email</span>
                </label>

              <div className={css.button}>
                <Button
                  type="button"
                  variant={`darkButton`}
                  className={css.submitButton}
                  onClick={() => navigate(-1)} 
                >Назад
                </Button>

                <Button
                  type="submit"
                  variant={`darkButton`}
                  className={css.submitButton}
                >Зареєструватися
                </Button>
              </div>
              
              </Form>
            </Formik>
            </div>

            
            <div className={css.socialIcons}>
              <div className={css.help}>
                <h3 className={css.h3}>Як це працює</h3>
                <p className={css.halpP}>Щоб розмістити оголошення або знайти свого улюбленця, необхідно авторизуватися.</p>
                <p className={css.halpP}>Це можна зробити двома способами:</p>
                <ul>
                  <li className={css.halpli}>
                  Заповнити форму реєстрації (ім’я, email, пароль)
                  </li>
                  <li className={css.halpli}>
                  Увійти за допомогою соцмереж чи сервісів: Facebook, Google або Microsoft
                  </li>
                </ul>
                <p className={css.halpP}>Оберіть зручний для вас варіант і приєднуйтесь до нашої спільноти, де кожна тваринка має шанс знайти свій дім
                </p>
              </div>

              <p className={css.p}>Продовжити з:</p>

              <div className={css.div}>
              <svg className={css.icon} viewBox="0 0 32 32">
                <use href="../../../public/sprite.svg#icon-flat-color-icons_google" />
              </svg>
              <svg className={css.icon} viewBox="0 0 33 32">
                <use href="../../../public/sprite.svg#icon-facebook2" />
              </svg>
              <svg className={css.icon} viewBox="0 0 32 32">
                <use href="../../../public/sprite.svg#icon-prime_microsoft" />
              </svg>
              </div>
            </div>

          </div>
        </div>
      )}
      {isError && <ToastInfo />}
    </>
  );
}
