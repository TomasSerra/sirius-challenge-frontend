import styles from "./CheckItem.module.scss";

type ItemProps = {
  id: string;
  name: string;
  onChange: (id: string, state: boolean) => void;
  checked?: boolean;
};

const Item = ({ id, name, onChange, checked = false }: ItemProps) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(id, e.target.checked)}
        className={styles.input}
      />
      <label htmlFor={id} className={styles.label}>
        {name}
      </label>
    </div>
  );
};

export default Item;
