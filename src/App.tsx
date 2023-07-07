import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRoutes from "./app/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
