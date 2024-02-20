import { Routes, Route } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import EndGame from "./pages/EndGame/EndGame";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Container
        maxW="xl"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        centerContent={true}
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
