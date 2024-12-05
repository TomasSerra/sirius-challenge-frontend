import Rating from '@/components/utils/rating/Rating';
import styles from './GameCard.module.scss'
import PlatformsList from '../../icons/platforms/PlatformsList';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Platform } from '@/types/platforms';

type GameCardProps = {
  imageUrl?: string;
  name?: string;
  rating?: number;
  platforms?: Platform[];
  genres?: string[];
  releaseDate?: string;
  onClick?: () => void;
}

const GameCard = ({imageUrl, name, rating, platforms, genres, releaseDate, onClick=()=>{}}: GameCardProps) => {
  return (
    <div className={styles["game-card"]} onClick={onClick}>
      
      <div className={styles["image-container"]}>
        {imageUrl ? 
        <>
          <div className={styles["rating-container"]}>
            <Rating rating={rating!}/>
          </div>
          <img src={imageUrl} alt={'card image ' + name} draggable={false}/>
        </>
        :
        <Skeleton height={150} width={260}/>
        }
      </div>

      <div className={styles["game-card-info"]}>
        <div>
          { platforms && platforms!.length > 0 ?
          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={platforms!}/>
          </div>
          :
          <Skeleton width={100}/>
          }

          { name ?
          <h3 className={styles.name}>{name}</h3>
          :
          <Skeleton width={220} height={30}/>
          }

          { genres && genres!.length > 0 ?
          <p className={styles.genres}>{genres!.join(', ')}</p>
          :
          <Skeleton width={200} height={15} style={{marginTop: '5px'}}/>
          }
        </div>
        { releaseDate ?
        <p className={styles.date}><b>Release Date:</b> {releaseDate}</p>
        :
        <Skeleton width={150} height={15}/>
        }
      </div>
    </div>
  )
}

export default GameCard