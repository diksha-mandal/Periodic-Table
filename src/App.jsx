import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
  
      <AppRoutes />

    </BrowserRouter>
  );
}

export default App
