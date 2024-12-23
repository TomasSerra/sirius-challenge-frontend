import LazyImage from "@/components/utils/images/optimizer/LazyImage";
import styles from "./GenreCard.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type GenreCardProps = {
  text: string;
  imageUrl: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  loading?: boolean;
};

const GenreCard = ({
  width = "100%",
  height = "fit-content",
  text,
  imageUrl,
  onClick = () => {},
  loading = false,
}: GenreCardProps) => {
  if (loading) return <GenreCardSkeleton width={width} height={height} />;
  return (
    <>
      <div
        className={styles.container}
        style={{ width: width, height: height }}
        onClick={onClick}
      >
        <LazyImage className={styles.image} src={imageUrl} alt={text} />
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};

const GenreCardSkeleton = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  return (
    <div className={styles.container} style={{ width: width, height: height }}>
      <Skeleton className={styles.image} />
      <Skeleton className={styles.text} height={15} width={100} />
    </div>
  );
};

export default GenreCard;
