import React from "react";
import { ImWindows8 } from "react-icons/im";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { VscTerminalLinux } from "react-icons/vsc";
import { GrAndroid } from "react-icons/gr";
import { BsNintendoSwitch } from "react-icons/bs";
import { Platform } from "@/types/platforms";

type PlatformIconProps = {
  icon: Platform;
  color?: string;
};

const PlatformIcon = ({ icon, color = "white" }: PlatformIconProps) => {
  const iconMap: Record<Platform, React.ReactNode> = {
    xbox: <FaXbox color={color} />,
    playstation: <FaPlaystation color={color} size={18} />,
    nintendo: <BsNintendoSwitch color={color} />,
    pc: <ImWindows8 color={color} />,
    ios: <IoLogoAppleAppstore color={color} />,
    mac: <BsApple color={color} />,
    linux: <VscTerminalLinux color={color} />,
    android: <GrAndroid color={color} />,
  };

  return <div>{iconMap[icon] || <></>}</div>;
};

export default PlatformIcon;
