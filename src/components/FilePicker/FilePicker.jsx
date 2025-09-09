import { useFormikContext } from "formik";
import { useRef } from "react";
import { ErrorMessage } from "formik";
import { Plus, X } from "lucide-react";

import css from "./FilePicker.module.css";

const FilePicker = ({ name, label, multiple = true, accept = "image/*" }) => {
  const { setFieldValue, values } = useFormikContext();
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const existingFiles = Array.isArray(values[name]) ? values[name] : [];
    const updatedFiles = [...existingFiles, ...fileArray].slice(0, 4);
    setFieldValue(name, updatedFiles);
  };
  const handleRemove = (index) => {
    const updatedFiles = values[name].filter((_, i) => i !== index);
    setFieldValue(name, updatedFiles);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <div className={css.filePickerWrapper}>
      {label && <label className={css.label}>{label}</label>}
      <div className={css.filePickerContent}>
        <div
          className={`${css.dropZone} ${
            !values[name] || values[name].length === 0 ? css.empty : ""
          }`}
          onClick={() => inputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            ref={inputRef}
            accept={accept}
            multiple={multiple}
            className={css.hiddenInput}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className={css.errorMessage}
        />
        {/* Прев’ю */}
        {Array.isArray(values[name]) && values[name].length > 0 && (
          <div className={css.previewGrid}>
            {values[name].map((file, i) => (
              <div key={i} className={css.previewItem}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${i}`}
                  className={css.previewImg}
                />
                <button
                  type="button"
                  className={css.removeBtn}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(i);
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilePicker;
