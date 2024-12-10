import { useParams } from "react-router-dom";
import styles from "./GamePage.module.scss";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PlatformsList from "@/components/ui/icons/platforms/PlatformsList";
import Metrics from "@/components/utils/metrics/Metrics";
import GameDetail from "@/components/utils/gameinfo/details/GameDetail";
import GameDetailSection from "@/components/utils/gameinfo/section/GameDetailSection";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GamePageInfo } from "@/types/gamePageInfo";
import { getGamePageInfo } from "@/utils/DataMapper";

const GameName = ({
  name,
  loading = false,
}: {
  name: string | undefined;
  loading?: boolean;
}) => {
  return (
    <>{!loading ? <h1>{name}</h1> : <Skeleton width={250} height={40} />}</>
  );
};

const GamePage = () => {
  const { id } = useParams();

  const [gameData, setGameData] = useState<GamePageInfo>();
  const [loading, setLoading] = useState(false);

  const fetchGameData = async () => {
    setLoading(true);
    const numericId = parseInt(id!.toString());
    getGamePageInfo(numericId)
      .then((response) => {
        setGameData(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching game data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <div className={styles["game-page-container"]}>
      <div className={styles.left}>
        <Banner gameData={gameData} />
        <GameDetailsSection gameData={gameData} loading={loading} />
      </div>
      <div className={styles.right}>
        <GameName name={gameData?.name} loading={loading} />
        <PlatformsList platforms={gameData?.platforms} loading={loading} />
        <Metrics
          exceptional={gameData?.metrics.exceptional}
          recommended={gameData?.metrics.recommended}
          meh={gameData?.metrics.meh}
          skip={gameData?.metrics.skip}
        />
        <GameDetails gameData={gameData} loading={loading} />
      </div>
    </div>
  );
};
export default GamePage;

const Banner = ({ gameData }: { gameData?: GamePageInfo }) => {
  const navigate = useNavigate();

  const BackArrow = () => {
    return (
      <span
        className={styles["back-arrow"]}
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoIosArrowBack size={30} />
      </span>
    );
  };

  return (
    <div className={styles["banner-container"]}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: gameData?.imageUrl
            ? `url(${gameData?.imageUrl})`
            : undefined,
        }}
      >
        <BackArrow />
      </div>
    </div>
  );
};

type GameDetailsProps = {
  gameData?: GamePageInfo;
  loading?: boolean;
};

const GameDetailsSection = ({
  gameData,
  loading = false,
}: GameDetailsProps) => {
  return (
    <section className={styles["detail-sections"]}>
      <GameDetailSection
        title="About The Game"
        description={gameData?.description}
        loading={loading}
      />
      <GameDetailSection
        title="Minimum Requirements"
        description={gameData?.min_requirements}
        loading={loading}
      />
      <GameDetailSection
        title="Recommended Requirements"
        description={gameData?.recommended_requirements}
        loading={loading}
      />
    </section>
  );
};

const GameDetails = ({ gameData, loading = false }: GameDetailsProps) => {
  const joinArray = (array: string[] | undefined): string | undefined => {
    return array?.map((s) => firstCharUpper(s)).join(", ");
  };

  const firstCharUpper = (str: string) => {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={styles.details}>
      <div className={styles["detail-column"]}>
        <GameDetail
          title="Platforms"
          description={joinArray(gameData?.platforms)}
          loading={loading}
        />
        <GameDetail
          title="Genre"
          description={joinArray(gameData?.genres)}
          loading={loading}
        />
        <GameDetail
          title="Developers"
          description={joinArray(gameData?.developers)}
          loading={loading}
        />
      </div>
      <div className={styles["detail-column"]}>
        <GameDetail
          title="Rating"
          description={gameData?.metacritic?.toString()}
          loading={loading}
        />
        <GameDetail
          title="Release Date"
          description={gameData?.released}
          loading={loading}
        />
      </div>
    </div>
  );
};
