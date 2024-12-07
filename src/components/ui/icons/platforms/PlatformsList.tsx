import PlatformIcon from './Platform';
import { Platform } from '@/types/platforms';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type PlatformsListProps = {
    platforms: Platform[] | undefined ;
    loading?: boolean;
}

const PlatformsList = ({platforms, loading=false}: PlatformsListProps) => {
  return (
    <div style={
        {
            display: 'flex',
            gap: '5px',
            justifyContent: 'start',
            alignItems: 'center',
        }
    }>
      { !loading ?
      <>
        {platforms?.map((platform, index) => (
          <PlatformIcon key={index} icon={platform} color="white"/>
        ))}
      </>
        :
      <>
        <Skeleton width={20} height={20} circle={true}/>
        <Skeleton width={20} height={20} circle={true}/>
        <Skeleton width={20} height={20} circle={true}/>
        <Skeleton width={20} height={20} circle={true}/>
      </>
      }
    </div>
        
  )
}

export default PlatformsList