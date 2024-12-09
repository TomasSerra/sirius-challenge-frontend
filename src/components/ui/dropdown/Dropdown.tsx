import Select from "react-dropdown-select";
import styles from "./Dropdown.module.scss";
import "./Dropdown.custom.scss";
import { Ordering } from "@/types/ordering";
import { useState } from "react";

type DropdownProps = {
  options: { value: Ordering; label: string }[];
  onChange?: (values: { value: Ordering; label: string }[]) => void;
  initialValue?: string;
};

const Dropdown = ({
  options,
  onChange = () => {},
  initialValue,
}: DropdownProps) => {
  const searchInitialValue = (initialValue: string) => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === initialValue) {
        return options[i];
      }
    }
    return options[0];
  };

  const [selected] = useState<{ value: Ordering; label: string }>(
    searchInitialValue(initialValue ? initialValue : options[0].label)
  );

  return (
    <div>
      <Select
        options={options}
        valueField="value"
        labelField="label"
        dropdownHandle={true}
        values={[selected]}
        color="#474749"
        onChange={(values) => onChange(values)}
        className={styles.dropdown}
        addPlaceholder="Order By"
      />
    </div>
  );
};

export default Dropdown;
