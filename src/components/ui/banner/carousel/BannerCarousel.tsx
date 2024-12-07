import { useEffect, useState } from 'react'
import AutoCarousel from '../../carousel/AutoCarousel'
import Banner from '../Banner'
import styles from './BannerCarousel.module.scss'
import { getGamesBannerInfo } from '@/utils/DataMapper'
import { GameCardInfo } from '@/types/gameCardInfo'

const BannerCarousel = () => {
    const [bannerInfo, setBannerInfo] = useState<GameCardInfo[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getGamesBannerInfo().then((response) => {
            setBannerInfo(response.games);
            setLoading(false);
        }).catch((error) => {
            console.error("Error fetching game cards info:", error);
            setLoading(false);
        });
    }, [])

    const SkeletonBanners = () => {
        return (
            <>
                {[...Array(1)].map((_, index) => (
                    <div className={styles["banner-container"]} key={index}>
                        <Banner name='' imageUrl='' description='' genres={[]} platforms={[]} id={0} loading={true}/>
                    </div>
                ))}
            </>
        )
    }

  return (
    <div>
        <AutoCarousel>
                {bannerInfo?.map((game) => (
                    <div className={styles["banner-container"]} key={game.id}>
                        <Banner 
                            name={game.name}
                            imageUrl={game.imageUrl}
                            description={game.description}
                            genres={game.genres}
                            platforms={game.platforms}
                            id={game.id}/>
                    </div>
                ))}
            { loading && <SkeletonBanners/> }
        </AutoCarousel>
    </div>
  )
}

export default BannerCarousel