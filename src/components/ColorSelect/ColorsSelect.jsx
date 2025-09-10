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
      placeholder="Оберіть забарвлення"
    />
  );
};

export default ColorsSelect;
