import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./GameCardsPaginate.module.scss";
import Button from "@/components/ui/button/Button";
import Dropdown from "@/components/ui/dropdown/Dropdown";
import { CiFilter } from "react-icons/ci";
import { getGameCardsInfo } from "@/utils/DataMapper";
import { GameCardInfo } from "@/types/gameCardInfo";
import { OrderByOptions } from "@/types/orderByOptions";
import Filters from "@/components/utils/filters/Filters";
import { useFilters } from "@/contexts/filters/FiltersContext";
import { GameFilters } from "@/types/filters";
import { GenreInfo } from "@/types/genresInfo";
import GameCards from "./cards/GameCards";

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
  const gamesPerPage = 20;
  const [loadingCards, setLoadingCards] = useState(false);
  const filtersContext = useFilters();
  const filters: GameFilters = filtersContext ? filtersContext.filters : {};
  const setFilters = filtersContext ? filtersContext.setFilters : () => {};
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentGames, setCurrentGames] = useState<GameCardInfo[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

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

  return (
    <div>
      {filtersOpen && (
        <Filters
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
      <div className={styles["filter-buttons-container"]}>
        <Dropdown
          options={OrderByOptions}
          initialValue={filters.ordering}
          onChange={(values) => {
            setFilters({ ...filters, ordering: values[0].value });
          }}
        />
        <Button
          text="Filter"
          width="100px"
          isFilled={false}
          icon={<CiFilter />}
          onClick={() => {
            setFiltersOpen(true);
          }}
        />
      </div>
      <div className={styles["games-container"]}>
        <GameCards
          games={currentGames}
          loading={loadingCards}
          gamesPerPage={gamesPerPage}
        />
      </div>
      {currentGames.length > 0 && (
        <div className={styles["pagination-container"]}>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={totalPages}
            forcePage={currentPage - 1}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={styles.pagination}
            previousLinkClassName={styles.arrow}
            pageLinkClassName={styles.number}
            nextLinkClassName={styles.arrow}
            activeLinkClassName={styles.active}
            disabledClassName={styles.disabled}
          />
        </div>
      )}
    </div>
  );
};

export default GameCardsPaginate;
