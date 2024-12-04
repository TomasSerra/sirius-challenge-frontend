import styles from './GenreCard.module.scss'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type GenreCardProps = {
    text: string;
    imageUrl: string;
    onClick?: () => void;
    width?: string;
    height?: string;
};

const GenreCard = ({
    width = '100%',
    height = 'fit-content',
    text,
    imageUrl,
    onClick = () => {},
  }: GenreCardProps) => {
    return (
      <div
        className={styles.container}
        style={{ width: width, height: height }}
        onClick={onClick}
      >
        {imageUrl ? (
          <img className={styles.image} src={imageUrl} alt={text} />
        ) : (
          <Skeleton className={styles.image} />
        )}
  
        {text ? (
          <p className={styles.text}>{text}</p>
        ) : (
          <Skeleton className={styles.text} height={25} width={100}/>
        )}
      </div>
    );
  };

export default GenreCard