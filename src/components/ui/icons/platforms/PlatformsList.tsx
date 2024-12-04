import React from 'react'
import PlatformIcon from './Platform';

type PlatformsListProps = {
    platforms: string[];
}

const PlatformsList = ({platforms}: PlatformsListProps) => {
  return (
    <div style={
        {
            display: 'flex',
            gap: '5px',
            justifyContent: 'start',
            alignItems: 'center',
        }
    }>
        {platforms.map((platform, index) => (
          <PlatformIcon key={index} icon={platform} color="white"/>
        ))}
    </div>
        
  )
}

export default PlatformsList