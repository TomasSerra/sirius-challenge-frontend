import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import GamePage from "./pages/game/GamePage";
import "./index.css";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="game/:id" element={<GamePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

