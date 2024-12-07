import Sidebar from '@/components/layout/sidebar/Sidebar';
import styles from './Home.module.scss';
import BannerCarousel from '@/components/ui/banner/carousel/BannerCarousel';
import GameCardsPaginate from '@/components/layout/paginate/GameCardsPaginate';
import { useParams } from 'react-router-dom';

const Home = () => {
  const { genre } = useParams();
  return (
    <>
      <Sidebar/>
      <div className={styles["home-container"]}>
        { !genre &&
        <section>
          <BannerCarousel/>
        </section>
        }
        <section>
          { genre ?
          <h1>{genre}</h1>
          :
          <h1>All Games</h1>
          }
          <GameCardsPaginate genres={genre}/>
        </section>
      </div>
    </>
  )
}

export default Home