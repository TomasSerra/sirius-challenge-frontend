import Rating from "@/components/utils/rating/Rating";
import styles from "./GameCard.module.scss";
import PlatformsList from "../../../utils/platforms/PlatformsList";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Platform } from "@/types/platforms";
import { useNavigate } from "react-router-dom";
import { getGameInfo } from "@/services/GlobalApi";
import { TbBrowserShare } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import LazyImage from "@/components/utils/images/optimizer/LazyImage";

type GameCardProps = {
  id: number;
  imageUrl: string;
  name: string;
  rating?: number;
  platforms: Platform[];
  genres?: string[];
  releaseDate: string;
  onClick?: () => void;
  loading?: boolean;
};

const GameCard = ({
  id,
  imageUrl,
  name,
  rating,
  platforms,
  genres,
  releaseDate,
  loading = false,
}: GameCardProps) => {
  const navigate = useNavigate();
  const [loadingWebsite, setLoadingWebsite] = useState(false);

  const handleClick = () => {
    navigate(`/game/${id}`);
  };

  const WebsiteButton = () => {
    const handleWebsiteClick = async (e: any) => {
      e.stopPropagation();
      setLoadingWebsite(true);
      getGameInfo(id)
        .then((response) => {
          if (response.data.website) {
            window.open(response.data.website, "_blank");
          }
          setLoadingWebsite(false);
        })
        .catch((error) => {
          console.error("Error fetching game website:", error);
          setLoadingWebsite(false);
        });
    };
    return (
      <>
        <div
          className={styles["button-container"]}
          onClick={(e) => {
            handleWebsiteClick(e);
          }}
          data-tooltip-id={"website-tooltip-" + id}
          data-tooltip-content="Game Website"
        >
          {!loadingWebsite ? (
            <TbBrowserShare size={25} />
          ) : (
            <BeatLoader color="#ffffff" size={3} />
          )}
        </div>
        <Tooltip id={"website-tooltip-" + id} />
      </>
    );
  };

  if (loading) return <GameCardSkeleton />;

  return (
    <div className={styles["game-card"]} onClick={handleClick}>
      <div className={styles["image-container"]}>
        {rating && (
          <div className={styles["rating-container"]}>
            <Rating rating={rating} />
          </div>
        )}
        <LazyImage
          src={imageUrl}
          alt={"card image " + name}
          className={styles.image}
        />
        <WebsiteButton />
      </div>

      <div className={styles["game-card-info"]}>
        <div>
          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={platforms} />
          </div>
          <h3 className={styles.name}>{name}</h3>
          {genres && genres!.length > 0 && (
            <p className={styles.genres}>{genres!.join(", ")}</p>
          )}
        </div>
        <p className={styles.date}>
          {releaseDate && (
            <>
              <b>Release Date:</b> {releaseDate}
            </>
          )}
        </p>
      </div>
    </div>
  );
};

const GameCardSkeleton = () => {
  return (
    <div className={styles["game-card"]}>
      <div className={styles["image-container"]}>
        <Skeleton height={150} width={260} />
      </div>

      <div className={styles["game-card-info"]}>
        <div>
          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={[]} loading={true} />
          </div>
          <Skeleton width={220} height={30} style={{ marginBottom: "10px" }} />
          <Skeleton width={150} height={15} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
