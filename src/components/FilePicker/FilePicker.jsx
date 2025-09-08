import { useFormikContext } from "formik";
import { ErrorMessage } from "formik";
import css from "./FilePicker.module.css";

const FilePicker = ({ name, label, multiple = true, accept = "image/*" }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <div className={css.filePickerWrapper}>
      {label && <label className={css.label}>{label}</label>}

      <input
        type="file"
        className={css.input}
        accept={accept}
        multiple={multiple}
        onChange={(e) => {
          const files = Array.from(e.target.files);
          setFieldValue(name, multiple ? files : files[0]);
        }}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />

      {/* Прев’ю */}
      {values[name] && (multiple ? values[name].length > 0 : values[name]) && (
        <div className={css.overlap}>
          {multiple ? (
            values[name].map((file, i) => (
              <img
                key={i}
                src={URL.createObjectURL(file)}
                alt={`preview-${i}`}
              />
            ))
          ) : (
            <img src={URL.createObjectURL(values[name])} alt="preview" />
          )}
        </div>
      )}
    </div>
  );
};

export default FilePicker;
