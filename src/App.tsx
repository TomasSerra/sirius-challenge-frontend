import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "0", padding: "0" }}>
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;