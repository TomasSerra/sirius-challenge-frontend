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
  return (
    <>
      {description && (
        <div className={styles.container}>
          {!loading ? (
            <>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </>
          ) : (
            <>
              <Skeleton width={70} height={30} />
              <Skeleton width={100} height={20} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default GameDetail;
