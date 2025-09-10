import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Некоректний email")
    .max(128, "Email не може бути довшим за 128 символів")
    .required("Email обов'язковий"),

  password: Yup.string()
    .min(8, "Пароль має містити щонайменше 8 символів")
    .max(128, "Пароль не може бути довшим за 128 символів")
    .required("Пароль обов'язковий"),
});