import Sidebar from '@/components/layout/sidebar/Sidebar';
import styles from './Home.module.scss';
import BannerCarousel from '@/components/ui/banner/carousel/BannerCarousel';
import GameCardsPaginate from '@/components/layout/paginate/GameCardsPaginate';

const Home = () => {
  return (
    <>
      <Sidebar/>
      <div className={styles["home-container"]}>
        <section>
          <BannerCarousel/>
        </section>
        <section>
          <h1>All Games</h1>
          <GameCardsPaginate/>
        </section>
        
      </div>
    </>
  )
}

export default Home