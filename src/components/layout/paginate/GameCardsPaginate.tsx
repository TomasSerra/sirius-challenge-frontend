import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './GameCardsPaginate.module.scss';
import GameCard from '@/components/ui/cards/game/GameCard';
import Button from '@/components/ui/button/Button';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { CiFilter } from 'react-icons/ci';
import { getGameCardsInfo } from '@/utils/DataMapper';
import { GameCardInfo } from '@/types/gameCardInfo';
import { Ordering } from '@/types/ordering';
import { GameFilters } from '@/types/filters';

type OrderByOption = { value: Ordering, label: string };

const OrderByOptions: OrderByOption[] = [
    { value: '', label: 'Trending' },
    { value: '-metacritic', label: 'Metacritic 🠗' },
    { value: 'metacritic', label: 'Metacritic 🠕' },
    { value: '-released', label: 'Release Date 🠗' },
    { value: 'released', label: 'Release Date 🠕' },
    { value: '-name', label: 'Name (A-Z)' },
    { value: 'name', label: 'Name (Z-A)' },
];

const GameCardsPaginate = () => {
    const gamesPerPage = 10;
    const [filters, setFilters] = useState<GameFilters>();
    const [totalPages, setTotalPages] = useState(0);
    const [currentGames, setCurrentGames] = useState<GameCardInfo[]>([]);
  
    const handlePageClick = (event: { selected: number }) => {
        const newPage: number = event.selected + 1;
        fetchGames(newPage);
    };

    const fetchGames = async (page: number) => {
        getGameCardsInfo(page, filters).then((response) => {
            setCurrentGames(response.games);
            setTotalPages(Math.max(response.total / gamesPerPage));
        }
        ).catch((error) => {
            console.error("Error fetching game cards info:", error);
        });
    }
  
    return (
      <div>
        <div className={styles["filter-buttons-container"]}>
            <Dropdown options={OrderByOptions} onChange={(values) => {setFilters({...filters, ordering: values[0].value})}}/>
            <Button text='Filter' width='100px' isFilled={false} icon={<CiFilter/>} onClick={()=>{fetchGames(1)}}/>
        </div>
        <div className={styles["games-container"]}>
            {currentGames.map((game) => (
                <GameCard key={game.id} id={game.id} name={game.name} imageUrl={game.imageUrl} rating={game.metacritic} platforms={game.platforms} genres={game.genres} releaseDate={game.released}/>
            ))}
            {currentGames.length === 0 && <p>No games found</p>}
        </div>
        { currentGames.length > 0 &&
        <div className={styles["pagination-container"]}>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName={styles.pagination}
                previousLinkClassName={styles.arrow}
                pageLinkClassName={styles.number}
                nextLinkClassName={styles.arrow}
                activeLinkClassName={styles.active}
            />
        </div>
        }
      </div>
    )
}

export default GameCardsPaginate;