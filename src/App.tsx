import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/ui/navigation";
import Games from "./pages/Games";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </>
  );
}

export default App;
