import { useFormikContext } from "formik";

export default function FixedErrorMessage({ name, className }) {
  const { errors } = useFormikContext();
  const errorText = errors[name] || "\u00A0"; // використовуємо тільки потрібне поле

  return (
    <div className={className} aria-live="polite">
      {errorText}
    </div>
  );
}
