import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles["app-container"]}>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;