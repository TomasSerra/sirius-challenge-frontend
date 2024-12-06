import Rating from '@/components/utils/rating/Rating';
import styles from './GameCard.module.scss'
import PlatformsList from '../../icons/platforms/PlatformsList';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Platform } from '@/types/platforms';
import { useNavigate } from "react-router-dom";
import { getGameInfo } from '@/services/GlobalApi';
import { TbBrowserShare } from "react-icons/tb";


type GameCardProps = {
  id: string;
  imageUrl: string;
  name: string;
  rating: number;
  platforms: Platform[];
  genres: string[];
  releaseDate: string;
  onClick?: () => void;
}

const GameCard = ({id, imageUrl, name, rating, platforms, genres, releaseDate}: GameCardProps) => {
  const navigate = useNavigate();

  //const [websiteUrl, setWebsiteUrl] = useState<string | null>(null);

  const handleClick = () => {
    navigate(`/game/${id}`);
  }

  const handleTrailerClick = async (e: any) => {
    e.stopPropagation();
    getGameInfo(parseInt(id)).then((response) => {
      //setWebsiteUrl(response.data.website);
      if(response.data.website){
        window.open(response.data.website, "_blank");
      }
    }).catch((error) => {
      console.error("Error fetching game trailer:", error);
    });
  }


  return (
    <div className={styles["game-card"]} onClick={handleClick}>
      
      <div className={styles["image-container"]}>
        {imageUrl ? 
        <>
          <div className={styles["rating-container"]}>
            <Rating rating={rating}/>
          </div>
          <img src={imageUrl} alt={'card image ' + name} draggable={false}/>
          <div className={styles["button-container"]} onClick={(e)=>{handleTrailerClick(e)}}>
            <TbBrowserShare size={25}/>
          </div>
          
        </>
        :
        <Skeleton height={150} width={260}/>
        }
      </div>

      <div className={styles["game-card-info"]}>
        <div>
          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={platforms}/>
          </div>

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