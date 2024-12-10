import GameCard from "@/components/ui/cards/game/GameCard";
import { GameCardInfo } from "@/types/gameCardInfo";
import styles from "./GameCards.module.scss";

type GameCardsProps = {
  loading: boolean;
  games: GameCardInfo[];
  gamesPerPage: number;
};

const GameCards = ({ loading, games, gamesPerPage }: GameCardsProps) => {
  const SkeletonCards = () => {
    return (
      <>
        {[...Array(gamesPerPage)].map((_, index) => (
          <GameCard
            key={index}
            id={index}
            imageUrl=""
            name=""
            rating={0}
            platforms={[]}
            releaseDate=""
            loading={true}
          />
        ))}
      </>
    );
  };

  return (
    <>
      {loading ? (
        <SkeletonCards />
      ) : (
        <>
          {games.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              name={game.name}
              imageUrl={game.imageUrl}
              rating={game.metacritic}
              platforms={game.platforms}
              genres={game.genres}
              releaseDate={game.released}
            />
          ))}
          {games.length === 0 && (
            <p className={styles["no-found"]}>No games found</p>
          )}
        </>
      )}
    </>
  );
};

export default GameCards;
