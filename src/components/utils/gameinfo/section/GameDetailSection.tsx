import styles from './GameDetailSection.module.scss'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type GameDetailSectionProps = {
    title?: string;
    description?: string;
    loading?: boolean;
}

const GameDetailSection = ({ title, description, loading=false }: GameDetailSectionProps) => {
  return (
    <div className={styles.container}>
        {!loading ?
         <>{description && <h2>{title}</h2>}</>
        :
        <Skeleton width={200} height={40}/>
        }

        {!loading ?
        <p className={styles.description}>{description}</p>
        :
        <Skeleton count={4} height={30} width={500}/>
        }
    </div>
  )
}

export default GameDetailSection