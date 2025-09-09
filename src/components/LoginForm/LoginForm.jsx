import css from "./LoginForm.module.css";

import { Formik, Form, Field } from "formik";
import { useId} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { selectLoading, selectError } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

import { validationSchema } from "./validationSchema";
import FixedErrorMessage from "../RegistrationForm/FixedErrorMessage";

import { logIn } from "../../redux/auth/operations";

import Button from "../Button/Button";
import ToastInfo from "../ToastInfo/ToastInfo";

export default function LoginForm() {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const navigate = useNavigate();


  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    dispatch(logIn(values));

    actions.resetForm();
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={`container`}>
          <div className={css.registerWrapper}>
      <div  className={css.div2}>
            <button
              type="button"
              className={css.backButton}
              onClick={() => navigate(-1)}
            > ←<span className={css.BackBut}> Повернутися назад</span>
            </button>

            <h1 className={css.heading}>Увійти</h1>

            <p className={css.loginPrompt}>
              Ще не маєте акаунта?{" "}
              <Link to="/auth/register" className={css.loginLink}>Зареєструватися</Link>
            </p>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              validateOnBlur={false}
              validateOnChange={false}
            >
              <Form className={css.form}>
                <label htmlFor={emailFieldId} className={css.inputLabel}>
                  Email
                </label>
                <Field
                  className={css.inputField}
                  id={emailFieldId}
                  type="email"
                  name="email"
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
                ></Field>
                <FixedErrorMessage
                  name="password"
                  className={css.error}
                ></FixedErrorMessage>


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
                >Увійти
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
