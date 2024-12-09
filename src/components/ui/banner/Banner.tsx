import styles from "./Banner.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PlatformsList from "@/components/ui/icons/platforms/PlatformsList";
import { Platform } from "@/types/platforms";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

type BannerProps = {
  id: number;
  name: string;
  platforms: Platform[];
  description: string;
  genres: string[];
  imageUrl: string;
  loading?: boolean;
};

const Banner = ({
  id,
  name,
  platforms,
  description,
  genres,
  imageUrl,
  loading = false,
}: BannerProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/game/${id}`);
  };
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
        backgroundColor: imageUrl ? undefined : "#474749",
      }}
    >
      <div className={styles["info-container"]}>
        <div className={styles.top}>
          {!loading ? <h3>{name}</h3> : <Skeleton width={150} height={30} />}

          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={platforms!} loading={loading} />
          </div>

          {!loading ? (
            <p className={styles.description}>{description}</p>
          ) : (
            <Skeleton count={4} />
          )}
        </div>
        <div className={styles.bottom}>
          {!loading ? (
            <Button text="View Game" onClick={handleClick} />
          ) : (
            <Skeleton width={200} height={50} />
          )}
          {!loading && genres && genres!.length > 0 ? (
            <p className={styles.genres}>{genres!.join(", ")}</p>
          ) : (
            <Skeleton width={200} height={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
