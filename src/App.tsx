import { Outlet, useNavigate } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "@/components/layout/header/Header";

const App = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/?search=${query}`);
  }

  return (
    <div className={styles["app-container"]}>
      <Header onSearch={handleSearch}/>
      <main className={styles["main-container"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;