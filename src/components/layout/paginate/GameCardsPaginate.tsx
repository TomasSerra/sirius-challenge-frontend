import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './GameCardsPaginate.module.scss';
import GameCard from '@/components/ui/cards/game/GameCard';
import Button from '@/components/ui/button/Button';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { CiFilter } from 'react-icons/ci';
import { getGameCardsInfo } from '@/utils/DataMapper';
import { GameCardInfo } from '@/types/gameCardInfo';
import { GameFilters } from '@/types/filters';
import { OrderByOptions } from '@/types/orderByOptions';

type GameCardsPaginateProps = {
    genres?: string | undefined;
    search?: string;
}

const GameCardsPaginate = ({genres, search}: GameCardsPaginateProps) => {
    const gamesPerPage = 10;
    const [loadingCards, setLoadingCards] = useState(false);
    const [filters, setFilters] = useState<GameFilters>();
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGames, setCurrentGames] = useState<GameCardInfo[]>([]);
  
    const handlePageClick = (event: { selected: number }) => {
        const newPage: number = event.selected + 1;
        setCurrentPage(newPage);
        fetchGames(newPage);
    };

    const fetchGames = async (page: number) => {
        setLoadingCards(true);
        getGameCardsInfo(page, filters).then((response) => {
            setCurrentGames(response.games);
            setTotalPages(Math.ceil(response.total / gamesPerPage));
            setLoadingCards(false);
        }
        ).catch((error) => {
            console.error("Error fetching game cards info:", error);
            setLoadingCards(false);
        });
    }

    useEffect(() => {
        fetchGames(currentPage);
    }, [filters]);

    useEffect(() => {
        setFilters({
            ...filters, 
            genres: genres?.toLowerCase().replace(/\s+/g, '-'),
            search: search
        });
    }, [genres, search]);

    const SkeletonCards = () => {
        return (
            <>
                {[...Array(gamesPerPage)].map((_, index) => (
                    <GameCard key={index} id={index} imageUrl='' name='' rating={0} platforms={[]} releaseDate='' loading={true}/>
                ))}
            </>
        )
    }
  
    return (
      <div>
        <div className={styles["filter-buttons-container"]}>
            <Dropdown options={OrderByOptions} onChange={(values) => {setFilters({...filters, ordering: values[0].value})}}/>
            <Button text='Filter' width='100px' isFilled={false} icon={<CiFilter/>} onClick={()=>{fetchGames(currentPage)}}/>
        </div>
        <div className={styles["games-container"]}>
            {loadingCards ? 
            <SkeletonCards/>
            :
            <>
                {currentGames.map((game) => (
                    <GameCard key={game.id} id={game.id} name={game.name} imageUrl={game.imageUrl} rating={game.metacritic} platforms={game.platforms} genres={game.genres} releaseDate={game.released}/>
                ))}
                {currentGames.length === 0 && <p>No games found</p>}
            </>
            }
            
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