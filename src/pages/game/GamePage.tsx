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
  const navigate = useNavigate();

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

  const BackArrow = () => {
    return (
      <span className={styles["back-arrow"]} onClick={goBack}>
        <IoIosArrowBack size={30} />
      </span>
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles["game-page-container"]}>
      <div className={styles.left}>
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
        <div className={styles.details}>
          <div className={styles["detail-column"]}>
            <GameDetail
              title="Platforms"
              description={gameData?.platforms?.join(", ")}
              loading={loading}
            />
            <GameDetail
              title="Genre"
              description={gameData?.genres?.join(", ")}
              loading={loading}
            />
            <GameDetail
              title="Developers"
              description={gameData?.developers?.join(", ")}
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
      </div>
    </div>
  );
};

export default GamePage;
