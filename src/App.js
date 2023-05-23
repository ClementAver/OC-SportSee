import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>App</p>
      <Outlet />
    </div>
  );
}

export default App;
