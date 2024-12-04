import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "@/components/layout/header/Header";

const App = () => {
  return (
    <div className={styles["app-container"]}>
      <Header />
      <main className={styles["main-container"]}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;