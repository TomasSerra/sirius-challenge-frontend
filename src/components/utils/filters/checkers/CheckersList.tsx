import { useState } from "react";
import CheckItem from "./CheckItem";
import styles from "./CheckersList.module.scss";

type CheckersListProps = {
  options: { id: string; name: string }[];
  onChange: (checkedProps: string[]) => void;
  initialCheckedProps?: string[];
};

const CheckersList = ({
  options,
  onChange,
  initialCheckedProps,
}: CheckersListProps) => {
  const [checkedProps, setCheckedProps] = useState<string[]>(
    initialCheckedProps || []
  );

  const handleItemChange = (id: string, state: boolean) => {
    const newCheckedProps = state
      ? [...checkedProps, id]
      : checkedProps.filter((prop) => prop !== id);
    setCheckedProps(newCheckedProps);
    onChange(newCheckedProps);
  };

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <CheckItem
          key={option.id}
          id={option.id}
          checked={checkedProps.includes(option.id)}
          name={option.name}
          onChange={handleItemChange}
        />
      ))}
    </div>
  );
};

export default CheckersList;
