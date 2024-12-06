import styles from './GameDetail.module.scss'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type GameDetailProps = {
    title: string | undefined;
    description: string | undefined;
}

const GameDetail = ({ title, description }: GameDetailProps) => {
    return (
        <div className={styles.container}>
            { title && description ? 
            <>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </>
            :
            <>
                <Skeleton width={70} height={30}/>
                <Skeleton width={100} height={20}/>
            </>
            }
        </div>
    )
}

export default GameDetail