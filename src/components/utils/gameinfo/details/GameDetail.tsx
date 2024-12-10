import styles from "./GameDetail.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type GameDetailProps = {
  title: string | undefined;
  description: string | undefined;
  loading?: boolean;
};

const GameDetail = ({
  title,
  description,
  loading = false,
}: GameDetailProps) => {
  if (loading) return <GameDetailSkeleton />;

  return (
    <>
      {description && (
        <div className={styles.container}>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </>
  );
};

const GameDetailSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width={70} height={30} />
      <Skeleton width={100} height={20} />
    </div>
  );
};

export default GameDetail;
