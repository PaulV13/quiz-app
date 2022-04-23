import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import { Routes, Route } from "react-router-dom";
import EndGame from "./pages/EndGame/EndGame";
import "./App.css";
import { Container } from "@chakra-ui/react";

const App = () => {
  return (
    <div className="App">
      <Container
        maxW="xl"
        justifyContent="center"
        alignitems="center"
        h="100vh"
        centerContent
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="endgame" element={<EndGame />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
