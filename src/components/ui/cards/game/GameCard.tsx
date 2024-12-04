import Rating from '@/components/utils/rating/Rating';
import PlatformIcon from '../../icons/platforms/Platform';
import styles from './GameCard.module.scss'
import PlatformsList from '../../icons/platforms/PlatformsList';

type GameCardProps = {
  imageUrl: string;
  name: string;
  rating: number;
  platforms: string[];
  genres: string[];
  releaseDate: string;
}

const GameCard = ({imageUrl, name, rating, platforms, genres, releaseDate}: GameCardProps) => {
  return (
    <div className={styles["game-card"]}>
      <div className={styles["image-container"]}>
        <div className={styles["rating-container"]}>
          <Rating rating={rating}/>
        </div>
        <img src={imageUrl} alt={'card image ' + name} />
      </div>
      
      <div className={styles["game-card-info"]}>
        <div className={styles["platforms-container"]}>
          <PlatformsList platforms={platforms}/>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p>{genres.join(', ')}</p>
        <p><b>Release Date:</b> {releaseDate}</p>
      </div>
    </div>
  )
}

export default GameCard