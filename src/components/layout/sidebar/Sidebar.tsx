import { getGenres } from '@/utils/DataMapper';
import styles from './Sidebar.module.scss'
import GenreCard from '@/components/ui/cards/genre/GenreCard'
import { GenreInfo } from '@/types/genresInfo';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [genres, setGenres] = useState<GenreInfo[]>([]);

  const fetchGenres = async () => {
      getGenres().then((response) => {
        setGenres(response);
      }
      ).catch((error) => {
        console.error("Error fetching genres:", error);
      });
  }

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <aside className={styles["sidebar-container"]}>
        <h2>Genres</h2>
        <div className={styles["genres-container"]}>
          {genres.map((genre) => (
            <GenreCard key={genre.text} imageUrl={genre.imageUrl} text={genre.text}/>
          ))}
        </div>
    </aside>
  )
}

export default Sidebar