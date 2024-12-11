import SearchBar from "@/components/ui/inputs/searchbar/Searchbar";
import styles from "./Header.module.scss";
import Logo from "@/assets/images/common/logo.png";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

type HeaderProps = {
  onSearch?: (query: string) => void;
};

const Header = ({ onSearch = () => {} }: HeaderProps) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={goToHome}>
        <img src={Logo} alt="logo" width="100%" />
        Info Games
      </div>
      <SearchBar width="640px" onSearch={onSearch} />
      <div className={styles.profile}>
        <FaCircleUser opacity={0.6} />
      </div>
    </header>
  );
};

export default Header;
