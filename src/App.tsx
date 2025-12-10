import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/ui/navigation";
import Games from "./pages/Games";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";

import GameDetail from "./pages/GameDetail";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<GameDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
