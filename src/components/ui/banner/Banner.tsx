import styles from './Banner.module.scss'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PlatformsList from '@/components/ui/icons/platforms/PlatformsList';
import { Platform } from '@/types/platforms';
import Button from '../button/Button';
import { useNavigate } from "react-router-dom";

type BannerProps = {
    id: string;
    name: string;
    platforms: Platform[];
    description: string;
    genres: string[];
    imageUrl: string;
};

const Banner = ({id, name, platforms, description, genres, imageUrl}: BannerProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/game/${id}`);
    }
  return (
    <div 
        className={styles.banner}
        style={{
            backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
            backgroundColor: imageUrl ? undefined : "#474749",
        }}
    >
        <div className={styles["info-container"]}>
            <div className={styles.top}>
                { name ?
                <h3>{name}</h3>
                :
                <Skeleton width={150} height={30}/>
                }

                { platforms && platforms!.length > 0 ?
                <div className={styles["platforms-container"]}>
                    <PlatformsList platforms={platforms!}/>
                </div>
                :
                <Skeleton width={100} style={{marginTop: '5px'}}/>
                }
                
                { description ?
                <p className={styles.description}>{description}</p>
                :
                <Skeleton count={4}/>
                }
            </div>
            <div className={styles.bottom}>
                <Button text='View Game' onClick={handleClick}/>
                { genres && genres!.length > 0 ?
                <p className={styles.genres}>{genres!.join(', ')}</p>
                :
                <Skeleton width={200} height={20}/>
                }
            </div>
        </div>
    </div>
  )
}

export default Banner