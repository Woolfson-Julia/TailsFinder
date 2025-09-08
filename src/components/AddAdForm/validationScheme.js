import * as Yup from "yup";

export const validationSchema = Yup.object({
  photos: Yup.array()
    .min(1, "Додайте хоча б одне фото")
    .max(4, "Максимум 5 фото"),
  status: Yup.string().required("Оберіть статус"),
  spicies: Yup.string().required("Оберіть тварину"),
  color: Yup.string().required("Оберіть вік"),
  sex: Yup.string().required("Оберіть стать"),
  size: Yup.string().required("Оберіть розмір"),
  description: Yup.string().max(2048, "Максимум 2048 символів"),
  location: Yup.object({
    lat: Yup.number().required("Оберіть точку на мапі"),
    lng: Yup.number().required("Оберіть точку на мапі"),
  }),
  notificationsAllowed: Yup.boolean(),
});
