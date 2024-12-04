import { SvgComponentProps } from "./IconProps";

const Pc = ({ color = "#FFF", ...props }: SvgComponentProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width='16px' height='16px' {...props}>
    <path
      fill={color}
      d="m0 13.772 6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15 8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
    />
  </svg>
);

export default Pc;
