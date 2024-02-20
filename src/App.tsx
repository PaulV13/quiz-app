import { Container } from "@chakra-ui/react";
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import EndGame from "./pages/EndGame/EndGame";
import "./App.css";

import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "game",
    element: <Game />,
  },
  {
    path: "ranking",
    element: <Ranking />,
  },
  {
    path: "endgame",
    element: <EndGame />,
  },
]);

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
        <RouterProvider router={router} />
      </Container>
    </div>
  );
};

export default App;
