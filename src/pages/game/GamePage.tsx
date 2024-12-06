import { useParams } from "react-router-dom";
import styles from './GamePage.module.scss';
import { Platform } from "@/types/platforms";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PlatformsList from "@/components/ui/icons/platforms/PlatformsList";
import Metrics from "@/components/utils/metrics/Metrics";
import GameDetail from "@/components/utils/gameinfo/details/GameDetail";
import GameDetailSection from "@/components/utils/gameinfo/section/GameDetailSection";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type GameData = {
  id: string;
  name: string;
  rating: number;
  platforms: Platform[];
  genres: string[];
  releaseDate: string;
  description: string;
  website: string;
  imageUrl: string;
  developers: string[];
  requirements: string;
  metrics: {
    exceptional: number;
    recommended: number;
    meh: number;
    skip: number;
  }
}

const GameName = ({name}: {name: string | undefined}) => {
  return (
    <>
      {name ?
        <h1>{name}</h1>
      :
        <Skeleton width={250} height={40}/>
      }
    </>
  )
}

const GamePage = () => {
  const { id } = useParams();
  const [gameData, setGameData] = useState<GameData | null>({
    id: id!,
    name: "Game Name",
    rating: 78,
    platforms: ['playstation', 'xbox', 'pc'],
    genres: ['Action', 'Adventure', 'RPG'],
    releaseDate: "Sep, 2015",
    description: "The fourth game in the post-apocalyptic action RPG series from Bethesda studious brings players back to the retro-future. After customizing the facial features of the character, players will be admitted to the Vault 111 with their family, and tricked into entering the cryogenic capsule. After the rude awakening after the unknown amount of time has passed, the child is separated from the parents and the loving partner is killed in front of them – the main quest is settled. Now there’s only the giant open world to explore. Fallout 4 introduces the mechanics of settlement building, where players can build their own little town. Gathering material for crafting and building brings more “survival” elements into the old formula. Within their own settlements, players will be able to build all needed utilities, from storage spaces to power armor stations. Visual upgrade from the previous game brings life to what used to be brown wastelands, now filled with details and color.",
    website: "",
    imageUrl: "https://www.nobbot.com/wp-content/uploads/2021/10/gta-5-requisitos.jpg",
    developers: ['Developer 1', 'Developer 2', 'Developer 3', 'Developer 4', 'Developer 5'],
    requirements: "Minimum:\nOS *: Windows 7(SP1+) and above\nProcessor: x64 or x86\nMemory: 4 GB RAM\nDirectX: Version 10\nStorage: 600 MB available space",
    metrics: {
      exceptional: 1234,
      recommended: 564,
      meh: 27,
      skip: 235
    }
  });
  const navigate = useNavigate();

  const BackArrow = () => {
    return (
      <span className={styles["back-arrow"]} onClick={goHome}>
        <IoIosArrowBack size={30}/>
      </span>
    )
  }
  
  const goHome = () => {
    navigate('/');
  }

  return (
    <div className={styles["game-page-container"]}>
      <div className={styles.left}>
        <div className={styles["banner-container"]}>
          <div className={styles.banner}
            style={{
              backgroundImage: gameData?.imageUrl ? `url(${gameData?.imageUrl})` : undefined,
              backgroundColor: gameData?.imageUrl ? undefined : "#474749",
          }}>
            <BackArrow/>
          </div>
        </div>
        <section className={styles["detail-sections"]}>
          <GameDetailSection title="About The Game" description={gameData?.description!}/>
          <GameDetailSection title="System Requirements (PC)" description={gameData?.requirements!}/>
        </section>
      </div>
      <div className={styles.right}>
        <GameName name={gameData?.name}/>
        <PlatformsList platforms={gameData?.platforms} />
        <Metrics 
          exceptional={gameData?.metrics.exceptional!}
          recommended={gameData?.metrics.recommended!}
          meh={gameData?.metrics.meh!}
          skip={gameData?.metrics.skip!}/>
        <div className={styles.details}>
          <div className={styles["detail-column"]}>
            <GameDetail title="Platforms" description={gameData?.platforms.join(", ")}/>
            <GameDetail title="Genre" description={gameData?.genres.join(", ")}/>
            <GameDetail title="Developers" description={gameData?.developers.join(", ")}/>
          </div>
          <div className={styles["detail-column"]}>
            <GameDetail title="Rating" description={gameData?.rating.toString()}/>
            <GameDetail title="Release Date" description={gameData?.releaseDate}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamePage