import Select from "react-select";
import { useFormikContext } from "formik";

const ColorsSelect = ({ name, options }) => {
  const { setFieldValue, values } = useFormikContext();

  const formattedOptions = options.map((c) => ({ value: c, label: c }));

  return (
    <Select
      isMulti
      name={name}
      options={formattedOptions}
      value={formattedOptions.filter((o) => values[name]?.includes(o.value))}
      onChange={(selected) =>
        setFieldValue(name, selected ? selected.map((o) => o.value) : [])
      }
      placeholder="Оберіть варіанти забарвлення"
      menuPortalTarget={document.body}
      styles={{
        control: (base) => ({
          ...base,
          border: "none",
          borderBottom: "2px solid transparent", // робимо місце для лінії
          borderImageSource:
            "linear-gradient(77.73deg, #c3aab2 -6.84%, #a3dec6 21.01%, #95d7c8 50.61%, #89d1ca 82.58%, #4b8bfa 126.33%)",
          borderImageSlice: 1,
          boxShadow: "none",
          minHeight: "40px",
        }),
        placeholder: (base) => ({
          ...base,
          fontWeight: "300",
          fontStyle: "Light",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
          color: "#000",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          padding: 4,
          svg: {
            width: 16,
            height: 16,
          },
          color: "#000",
          fontSize: "10px",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        multiValue: (base) => ({
          ...base,
          backgroundColor: "#f0f0ff", // фон тегу
          borderRadius: "8px",
          padding: "2px 6px",
        }),
        multiValueLabel: (base) => ({
          ...base,
          color: "#000000",
          fontFamily: "e-Ukraine",
          fontWeight: 300,
          fontSize: "12px",
          padding: 0,
        }),
        option: (base, state) => ({
          ...base,
          color: "#000000",
          fontFamily: "e-Ukraine",
          fontWeight: "300",
          fontStyle: "Light",
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
          backgroundColor: state.isFocused ? "#f0f0ff" : "#fcfcfc",
        }),
        menuPortal: (base) => ({ ...base, zIndex: 9999 }),
      }}
    />
  );
};

export default ColorsSelect;
