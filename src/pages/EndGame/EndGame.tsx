import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGameStore } from "../../store/store";
import { Box, Button, Input, Text, useToast } from "@chakra-ui/react";
import { Player } from "../../types";
import CustomButton from "../../components/CustomButton/CustomButton";

const EndGame = () => {
  const score = useGameStore((state) => state.score);
  const resetScore = useGameStore((state) => state.resetScore);
  const toast = useToast();

  const [name, setName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);

  let navigate = useNavigate();

  useEffect(() => {
    const localstorageplayers = window.localStorage.getItem("players");

    if (localstorageplayers !== null) {
      setPlayers(JSON.parse(localstorageplayers));
    }
  }, []);

  const handleChangeNameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSaveUserScore = () => {
    if (name.trim() === "") {
      toast({
        title: "Debe ingrese su nombre!!!",
        status: "error",
        duration: 1000,
        isClosable: false,
        position: "bottom-right",
      });
      return;
    }
    const newPlayer: Player = {
      name,
      score,
    };
    const newPlayers: Player[] = players.concat(newPlayer);

    window.localStorage.setItem("players", JSON.stringify(newPlayers));
    toast({
      title: "Nombre guardado correctamente!!!",
      status: "success",
      duration: 1000,
      isClosable: false,
      position: "bottom-right",
    });
    resetScore();
    navigate("/");
  };

  return (
    <Box
      h="350px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box textAlign="center">
        <Text fontSize="28px" color="#eee" fontWeight="bold">
          Puntuación
        </Text>
        <Text color="#eee" fontSize="32px" fontWeight="bold">
          {score}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column">
        <Input
          my={4}
          type="text"
          value={name}
          color={"#eee"}
          placeholder="Ingrese su nombre..."
          onChange={handleChangeNameUser}
        />
        <Box display="flex" flexDirection="row">
          <Button
            display="inline-block"
            m="10px"
            background="white"
            p="10px"
            borderRadius="4px"
            border="4px solid #555"
            textTransform="uppercase"
            color="rgb(14, 45, 73)"
            fontWeight="bold"
            cursor="pointer"
            variant="link"
            _hover={{ textDecoration: "none", background: "#ccc" }}
            onClick={handleSaveUserScore}
          >
            Guardar
          </Button>
          <CustomButton text="Volver Inicio" to="/" />
        </Box>
      </Box>
    </Box>
  );
};

export default EndGame;
