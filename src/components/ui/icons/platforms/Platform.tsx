import React from 'react'
import XboxIcon from '@/assets/icons/platforms/Xbox';
import PlaystationIcon from '@/assets/icons/platforms/PS';
import NintendoIcon from '@/assets/icons/platforms/Nintendo';
import Pc from '@/assets/icons/platforms/PC';
import AppleIcon from '@/assets/icons/platforms/Apple';

type PlatformIconProps = {
  icon: string;
  color?: string;
};
  
const PlatformIcon = ({ icon, color="white" }: PlatformIconProps) => {
  const iconMap: Record<string, React.ReactNode> = {
    xbox: <XboxIcon color={color}/>,
    playstation: <PlaystationIcon color={color}/>,
    nintendo: <NintendoIcon color={color}/>,
    pc: <Pc color={color}/>,
    ios: <AppleIcon color={color}/>,
    mac: <AppleIcon color={color}/>,
  };

  return <div>{iconMap[icon] || <></>}</div>;
};
  
export default PlatformIcon;