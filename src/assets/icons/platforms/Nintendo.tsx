import { SvgComponentProps } from "./IconProps";


const NintendoIcon = ({ color = "#FFF", ...props }: SvgComponentProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16" {...props}>
    <path
      fill={color}
      fillRule="evenodd"
      d="M8 0h5a8 8 0 1 1 0 16H8A8 8 0 1 1 8 0zm-.135 1.935a6.065 6.065 0 0 0 0 12.13h5.12a6.065 6.065 0 0 0 0-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z"
    />
  </svg>
);

export default NintendoIcon;
