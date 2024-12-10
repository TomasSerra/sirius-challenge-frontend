import styles from "./Sidebar.module.scss";
import GenreCard from "@/components/ui/cards/genre/GenreCard";
import { GenreInfo } from "@/types/genresInfo";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  genres: GenreInfo[];
  loading?: boolean;
};

const Sidebar = ({ genres, loading = false }: SidebarProps) => {
  const navigate = useNavigate();

  const SkeletonCards = () => {
    return (
      <>
        {[...Array(12)].map((_, index) => (
          <GenreCard key={index} text="" imageUrl="" loading={true} />
        ))}
      </>
    );
  };

  const handleClick = (genre: string) => {
    navigate(`/${genre}`);
  };

  return (
    <aside className={styles["sidebar-container"]}>
      <h2>Genres</h2>
      <div className={styles["genres-container"]}>
        {loading ? (
          <SkeletonCards />
        ) : (
          <>
            {genres.map((genre) => (
              <GenreCard
                key={genre.text}
                imageUrl={genre.imageUrl}
                text={genre.text}
                onClick={() => {
                  handleClick(genre.id);
                }}
              />
            ))}
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
