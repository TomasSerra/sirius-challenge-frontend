import { getGenres } from '@/utils/DataMapper';
import styles from './Sidebar.module.scss'
import GenreCard from '@/components/ui/cards/genre/GenreCard'
import { GenreInfo } from '@/types/genresInfo';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [genres, setGenres] = useState<GenreInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchGenres = async () => {
    setLoading(true);
      getGenres().then((response) => {
        setGenres(response);
        setLoading(false);
      }
      ).catch((error) => {
        console.error("Error fetching genres:", error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchGenres();
  }, []);

  const SkeletonCards = () => {
    return (
        <>
            {[...Array(12)].map((_, index) => (
                <GenreCard key={index} text='' imageUrl='' loading={true}/>
            ))}
        </>
    )
  }

  const handleClick = (genre: string) => {
    navigate(`/${genre}`);
  }

  return (
    <aside className={styles["sidebar-container"]}>
        <h2>Genres</h2>
        <div className={styles["genres-container"]}>
          {loading ? 
          <SkeletonCards/>
          :
            <>
              {genres.map((genre) => (
                <GenreCard key={genre.text} imageUrl={genre.imageUrl} text={genre.text} onClick={()=>{handleClick(genre.text)}}/>
              ))}
            </>
          }
        </div>
    </aside>
  )
}

export default Sidebar