import Sidebar from '@/components/layout/sidebar/Sidebar';
import styles from './Home.module.scss';
import BannerCarousel from '@/components/ui/banner/carousel/BannerCarousel';
import Button from '@/components/ui/button/Button';
import { CiFilter } from "react-icons/ci";
import Dropdown from '@/components/ui/dropdown/Dropdown';
import GameCard from '@/components/ui/cards/game/GameCard';
import GameCardsPaginate from '@/components/layout/paginate/GameCardsPaginate';

const Home = () => {
  return (
    <>
      <Sidebar/>
      <div className={styles["main-section"]}>
        <section>
          <h1>Trending</h1>
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