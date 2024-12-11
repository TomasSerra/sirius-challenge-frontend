import { useEffect, useState } from "react";
import styles from "./GameCardsPaginate.module.scss";
import { getGameCardsInfo } from "@/utils/DataMapper";
import { GameCardInfo } from "@/types/gameCardInfo";
import { useFilters } from "@/contexts/filters/FiltersContext";
import { GameFilters } from "@/types/filters";
import { GenreInfo } from "@/types/genresInfo";
import GameCards from "./cards/GameCards";
import Filters from "./filters/Filters";
import FiltersSelector from "@/components/utils/filters/Filters";
import Paginator from "@/components/utils/paginator/Paginator";

type GameCardsPaginateProps = {
  genre?: string | undefined;
  genres?: GenreInfo[] | undefined;
  search?: string;
};

const GameCardsPaginate = ({
  genre,
  genres,
  search,
}: GameCardsPaginateProps) => {
  const [loadingCards, setLoadingCards] = useState(false);
  // Filters management
  const filtersContext = useFilters();
  const filters: GameFilters = filtersContext ? filtersContext.filters : {};
  const [filtersOpen, setFiltersOpen] = useState(false);
  const setFilters = filtersContext ? filtersContext.setFilters : () => {};

  // Pages management
  const gamesPerPage = 20;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGames, setCurrentGames] = useState<GameCardInfo[]>([]);

  useEffect(() => {
    fetchGames(currentPage);
  }, [filters]);

  useEffect(() => {
    setCurrentPage(1);
    setFilters({
      ...filters,
      genres: genre?.toLowerCase().replace(/\s+/g, "-"),
      search: search,
    });
  }, [genre, search]);

  const handlePageClick = (event: { selected: number }) => {
    const newPage: number = event.selected + 1;
    setCurrentPage(newPage);
    fetchGames(newPage);
  };

  const fetchGames = async (page: number) => {
    setLoadingCards(true);
    getGameCardsInfo(page, filters)
      .then((response) => {
        setCurrentGames(response.games);
        setTotalPages(Math.ceil(response.total / gamesPerPage));
        setLoadingCards(false);
      })
      .catch((error) => {
        console.error("Error fetching game cards info:", error);
        setLoadingCards(false);
      });
  };

  return (
    <div>
      {filtersOpen && (
        <FiltersSelector
          close={() => {
            setFiltersOpen(false);
          }}
          onApply={(filters) => {
            if (filters) {
              setFilters(filters);
            }
          }}
          initialFilters={filters}
          genres={genres}
        />
      )}
      <Filters
        filters={filters}
        setFilters={setFilters}
        setFiltersOpen={setFiltersOpen}
      />
      <div className={styles["games-container"]}>
        <GameCards
          games={currentGames}
          loading={loadingCards}
          gamesPerPage={gamesPerPage}
        />
      </div>
      {currentGames.length > 0 && (
        <Paginator
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageClick={handlePageClick}
        />
      )}
    </div>
  );
};

export default GameCardsPaginate;
