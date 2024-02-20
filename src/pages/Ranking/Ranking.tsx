import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Player } from "../../types";

const Ranking = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  const sortPlayers = (players: Player[]) => {
    const p = players
      .sort((a, b) => {
        const aScore = a.score;
        const bScore = b.score;
        return aScore - bScore;
      })
      .reverse()
      .slice(0, 10);
    setPlayers(p);
  };

  useEffect(() => {
    const playersLocalStorage = window.localStorage.getItem("players");
    if (playersLocalStorage !== null) {
      sortPlayers(JSON.parse(playersLocalStorage));
    }
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center">
      <Text m={4} fontSize="22px" fontWeight="bold" color="#eee">
        RANKING
      </Text>
      <Box
        p="10px"
        w="250px"
        minHeight="350px"
        bg="#ccc"
        borderRadius="4px"
        border="4px solid #555"
      >
        {players.map((player, index) => {
          return (
            <Flex
              justifyContent="space-between"
              p="10px"
              borderBottom="1px solid #555"
              fontWeight="bold"
              color="#333"
              key={index}
            >
              {player.name} <span>{player.score}</span>
            </Flex>
          );
        })}
      </Box>
      <CustomButton text="Volver Inicio" to="/" />
    </Flex>
  );
};

export default Ranking;
