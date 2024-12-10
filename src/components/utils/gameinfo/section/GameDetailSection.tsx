import styles from "./GameDetailSection.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type GameDetailSectionProps = {
  title?: string;
  description?: string;
  loading?: boolean;
};

const GameDetailSection = ({
  title,
  description,
  loading = false,
}: GameDetailSectionProps) => {
  if (loading) return <GameDetailSectionSkeleton />;

  return (
    <div className={styles.container}>
      {description && <h2>{title}</h2>}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const GameDetailSectionSkeleton = () => {
  return (
    <div className={styles.container}>
      <Skeleton width={200} height={40} />
      <Skeleton count={4} height={30} width={500} />
    </div>
  );
};

export default GameDetailSection;
