import styles from './GameDetailSection.module.scss'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type GameDetailSectionProps = {
    title: string;
    description: string;
}

const GameDetailSection = ({ title, description }: GameDetailSectionProps) => {
  return (
    <div className={styles.container}>
        {title ?
        <h2>{title}</h2>
        :
        <Skeleton width={70} height={40}/>
        }

        {description ?
        <p className={styles.description}>{description}</p>
        :
        <Skeleton count={4} height={30}/>
        }
    </div>
  )
}

export default GameDetailSection