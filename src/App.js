import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
