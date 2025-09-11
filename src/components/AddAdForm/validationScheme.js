import * as Yup from "yup";

export const validationSchema = Yup.object({
  status: Yup.string().required("Оберіть статус"),
  species: Yup.string().required("Оберіть тварину"),
  colors: Yup.array()
    .of(Yup.string())
    .min(1, "Оберіть хоча б одне забарвлення"),
  sex: Yup.string().required("Оберіть стать"),
  size: Yup.string().required("Оберіть розмір"),
  date: Yup.date().nullable().required("Оберіть дату та час події"),
  description: Yup.string().max(2048, "Максимум 2048 символів"),
  location: Yup.object({
    lat: Yup.number().nullable().required("Оберіть точку на мапі"),
    lng: Yup.number().nullable().required("Оберіть точку на мапі"),
  }),
  notificationsAllowed: Yup.boolean().default(false),
});
