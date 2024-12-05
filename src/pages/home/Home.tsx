import Sidebar from '@/components/layout/sidebar/Sidebar';
import styles from './Home.module.scss';
import Banner from '@/components/ui/banner/Banner';

const Home = () => {
  return (
    <>
      <Sidebar/>
      <section className={styles["main-section"]}>
        <Banner/>
      </section>
    </>
  )
}

export default Home