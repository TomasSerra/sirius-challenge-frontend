import styles from './Sidebar.module.scss'
import GenreCard from '@/components/ui/cards/genre/GenreCard'

const Sidebar = () => {
  return (
    <aside className={styles["sidebar-container"]}>
        <h2>Genres</h2>
        <div className={styles["genres-container"]}>
          <GenreCard text="Action" imageUrl="" />
          <GenreCard text="Adventure" imageUrl="" />
          <GenreCard text="Racing" imageUrl="" />
          <GenreCard text="Sports" imageUrl="" />
          <GenreCard text="Strategy" imageUrl="" />
          <GenreCard text="Simulation" imageUrl="" />
          <GenreCard text="Puzzle" imageUrl="" />
          <GenreCard text="Casual" imageUrl="" />
          <GenreCard text="Arcade" imageUrl="" />
          <GenreCard text="RPG" imageUrl="" />
          <GenreCard text="MMO" imageUrl="" />
          <GenreCard text="Indie" imageUrl="" />
        </div>
    </aside>
  )
}

export default Sidebar