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

const ICON_MAP: Record<Platform, React.ElementType> = {
  xbox: FaXbox,
  playstation: FaPlaystation,
  nintendo: BsNintendoSwitch,
  pc: ImWindows8,
  ios: IoLogoAppleAppstore,
  mac: BsApple,
  linux: VscTerminalLinux,
  android: GrAndroid,
};

const PlatformIcon: React.FC<PlatformIconProps> = ({
  icon,
  color = "white",
}) => {
  const IconComponent = ICON_MAP[icon];
  return IconComponent ? <IconComponent color={color} /> : null;
};

export default PlatformIcon;
