import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Ім’я має містити щонайменше 2 символи")
    .max(16, "Ім’я не може бути довшим за 16 символів")
    .required("Ім’я обов’язкове"),

  email: Yup.string()
    .email("Некоректна електронна пошта")
    .max(128, "Електронна пошта не може бути довшою за 128 символів")
    .required("Пошта обов’язкова"),

  password: Yup.string()
    .min(8, "Пароль має містити щонайменше 8 символів")
    .max(128, "Пароль не може бути довшим за 128 символів")
    .required("Пароль обов’язковий"),

  phone: Yup.string()
    .notRequired(), // optional

  notificationsAllowed: Yup.boolean().notRequired(),

  termsAccepted: Yup.boolean()
    .oneOf([true], "Ви повинні прийняти умови та положення")
    .required("Необхідно прийняти умови"),
});
