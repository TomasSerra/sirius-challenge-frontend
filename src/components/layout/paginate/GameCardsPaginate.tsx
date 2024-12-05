import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './GameCardsPaginate.module.scss';
import GameCard from '@/components/ui/cards/game/GameCard';
import Button from '@/components/ui/button/Button';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { CiFilter } from 'react-icons/ci';

const OrderByOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'rating', label: 'Rating' },
    { value: 'releaseDate', label: 'Release Date' },
];

const GameCardsPaginate = () => {
    const pageSize = 10;
    const [totalGames, setTotalGames] = useState(0);
    const [totalPages, setTotalPages] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentGames, setCurrentGames] = useState([]);
  
    const handlePageClick = (event: { selected: number }) => {
        const newPage: number = event.selected + 1;
        setCurrentPage(newPage);
        alert('new page ' + newPage);
    };
  
    return (
      <div>
        <div className={styles["filter-buttons-container"]}>
            <Dropdown options={OrderByOptions}/>
            <Button text='Filter' width='100px' isFilled={false} icon={<CiFilter/>}/>
        </div>
        <div className={styles["games-container"]}>
            <GameCard id="1" name="Grand Therf Auto: V" imageUrl="https://www.nobbot.com/wp-content/uploads/2021/10/gta-5-requisitos.jpg" rating={87} platforms={["playstation", "xbox", "pc", "mac"]} genres={["Action", "Open World", "RPG"]} releaseDate="Sep, 2016"/>
            <GameCard id="2" name="Cyberpunk 2077" imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg" rating={70} platforms={["playstation", "xbox", "pc", "mac"]} genres={["Action", "Adventure", "RPG"]} releaseDate="Dec, 2020"/>
            <GameCard id="3" name="The Witcher 3" imageUrl="https://static.bandainamcoent.eu/high/the-witcher/the-witcher-3-wild-hunt/00-page-setup/tw3-new-header-mobile.jpg" rating={24} platforms={["playstation", "xbox", "pc", "nintendo"]} genres={["Action", "Adventure", "RPG"]} releaseDate="May, 2015"/>
            <GameCard id="4" name="Minecraft" imageUrl="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/Vanilla-PMP_Collection-Carousel-0_Buzzy-Bees_1280x768.jpg" rating={93} platforms={["playstation", "xbox", "pc"]} genres={["Action", "Adventure", "RPG", "Sandbox", "Survival", "Open World"]} releaseDate="Nov, 2011"/>
            <GameCard id="5" name="Grand Therf Auto: V" imageUrl="https://www.nobbot.com/wp-content/uploads/2021/10/gta-5-requisitos.jpg" rating={87} platforms={["playstation", "xbox", "pc", "mac"]} genres={["Action", "Open World", "RPG"]} releaseDate="Sep, 2016"/>
            <GameCard id="6" name="Cyberpunk 2077" imageUrl="https://image.api.playstation.com/vulcan/ap/rnd/202111/3013/bxSj4jO0KBqUgAbH3zuNjCje.jpg" rating={70} platforms={["playstation", "xbox", "pc", "mac"]} genres={["Action", "Adventure", "RPG"]} releaseDate="Dec, 2020"/>
            <GameCard id="7" name="The Witcher 3" imageUrl="https://static.bandainamcoent.eu/high/the-witcher/the-witcher-3-wild-hunt/00-page-setup/tw3-new-header-mobile.jpg" rating={58} platforms={["playstation", "xbox", "pc", "nintendo"]} genres={["Action", "Adventure", "RPG"]} releaseDate="May, 2015"/>
        </div>
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
      </div>
    )
}

export default GameCardsPaginate;