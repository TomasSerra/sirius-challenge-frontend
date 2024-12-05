import React from 'react'
import Select from 'react-dropdown-select';
import styles from './Dropdown.module.scss';
import './Dropdown.custom.scss';

type DropdownProps = {
    options: { value: string, label: string }[];
    onChange?: (values: { value: string, label: string }[]) => void;
    initialValue?: { value: string, label: string };
}

const Dropdown = ({options, onChange = ()=>{}, initialValue}: DropdownProps) => {
    if (!initialValue) {
        initialValue = options[0];
    }
  return (
    <div>
        <Select
            options={options}
            valueField='value'
            labelField='label'
            dropdownHandle={true}
            values={[initialValue]}
            color="#474749"
            onChange={(values) => onChange(values)}
            className={styles.dropdown}
            addPlaceholder='Order By'
        />
    </div>
  )
}

export default Dropdown