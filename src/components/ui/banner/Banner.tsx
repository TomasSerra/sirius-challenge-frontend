import { useState } from 'react'
import styles from './Banner.module.scss'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PlatformsList from '@/components/ui/icons/platforms/PlatformsList';
import { Platform } from '@/types/platforms';
import Button from '../button/Button';

type Game = {
    name: string;
    platforms: Platform[];
    description?: string;
    genres?: string[];
};

const Banner = () => {
    const [activeGame, setActiveGame] = useState<Game>({
        name: "The Legend of Zelda: Breath of the Wild",
        platforms: ["nintendo", "pc"],
        description: "The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo, released for the Nintendo Switch and Wii U consoles on March 3, 2017. Set in the fantasy land of Hyrule, the plot centers",
        genres: ["Action", "Adventure"]
    });

  return (
    <div className={styles.banner}>
        <div className={styles["info-container"]}>
            <div className={styles.top}>
                { activeGame.name ?
                <h3>{activeGame.name}</h3>
                :
                <Skeleton width={150} height={30}/>
                }

                { activeGame.platforms && activeGame.platforms!.length > 0 ?
                <div className={styles["platforms-container"]}>
                    <PlatformsList platforms={activeGame.platforms!}/>
                </div>
                :
                <Skeleton width={100} style={{marginTop: '5px'}}/>
                }
                
                { activeGame.description ?
                <p className={styles.description}>{activeGame.description}</p>
                :
                <Skeleton count={3}/>
                }
            </div>
            <div className={styles.bottom}>
                <Button text='View Game'/>
                { activeGame.genres && activeGame.genres!.length > 0 ?
                <p className={styles.genres}>{activeGame.genres!.join(', ')}</p>
                :
                <Skeleton width={200} height={20}/>
                }
            </div>
        </div>
    </div>
  )
}

export default Banner