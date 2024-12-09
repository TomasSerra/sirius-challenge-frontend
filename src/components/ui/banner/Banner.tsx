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

  if (loading) return <BannerSkeleton />;

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
      }}
    >
      <div className={styles["info-container"]}>
        <div className={styles.top}>
          <h3>{name}</h3>
          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={platforms!} loading={loading} />
          </div>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.bottom}>
          <Button text="View Game" onClick={handleClick} />
          {genres && genres!.length > 0 && (
            <p className={styles.genres}>{genres!.join(", ")}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const BannerSkeleton = () => {
  return (
    <div className={styles.banner}>
      <div className={styles["info-container"]}>
        <div className={styles.top}>
          <Skeleton width={150} height={30} />
          <div className={styles["platforms-container"]}>
            <PlatformsList platforms={[]} loading={true} />
          </div>
          <Skeleton count={4} />
        </div>
        <div className={styles.bottom}>
          <Skeleton width={200} height={50} />
          <Skeleton width={200} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
