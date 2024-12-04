import Sidebar from '@/components/layout/sidebar/Sidebar';
import styles from './Home.module.scss';
import Rating from '@/components/utils/rating/Rating';
import GameCard from '@/components/ui/cards/game/GameCard';

const Home = () => {
  return (
    <>
      <Sidebar/>
      <section className={styles["main-section"]}>
        <GameCard 
          imageUrl="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
          name="The Legend of Zelda: Breath of the Wild"
          rating={95}
          platforms={['nintendo', 'pc', 'mac', 'playstation']}
          genres={['Action', 'Adventure']}
          releaseDate="03/03/2017"
        />
      </section>
    </>
  )
}

export default Home