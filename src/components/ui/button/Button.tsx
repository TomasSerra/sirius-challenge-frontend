import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    width?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isFilled?: boolean;
    icon?: React.ReactNode;
};

const Button = ({ text, width = '100%', onClick = () => {}, isFilled = true, icon }: ButtonProps) => {
    return (
        <button
            style={{ width }}
            onClick={onClick}
            className={`${styles.button} ${isFilled ? styles.filled : styles['no-filled']}`}
        >
            {text}
            {icon && <span className={styles.icon}>{icon}</span>}
        </button>
    );
};

export default Button;
