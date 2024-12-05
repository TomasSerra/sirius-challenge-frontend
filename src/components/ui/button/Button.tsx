import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    width?: string;
    onClick?: () => void;
}

const Button = ({text, width='100%', onClick=()=>{}}: ButtonProps) => {
    return (
        <button style={{width: width}} onClick={onClick} className={styles.button}>{text}</button>
    )
}

export default Button