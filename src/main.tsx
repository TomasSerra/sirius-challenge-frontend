import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import GamePage from "./pages/game/GamePage";
import "./index.scss";
import { SkeletonTheme } from "react-loading-skeleton";
import { FiltersProvider } from "./contexts/filters/FiltersContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SkeletonTheme baseColor="#454545" highlightColor="#575757">
    <FiltersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/:genre" element={<Home />} />
            <Route path="/game/:id" element={<GamePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FiltersProvider>
  </SkeletonTheme>
);
