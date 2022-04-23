import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

const EndGame = () => {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    const localstorageplayers = window.localStorage.getItem("players");

    if (localstorageplayers !== null) {
      setPlayers(JSON.parse(localstorageplayers));
    }

    const newScore = window.localStorage.getItem("score");
    if (newScore !== null) {
      setScore(newScore);
    }
  }, []);

  useEffect(() => {
    const localStarting = window.localStorage.getItem("starting");
    if (localStarting === "false") {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const newPlayer = {
      name,
      score,
    };
    const newPlayers = players.concat(newPlayer);
    window.localStorage.setItem("players", JSON.stringify(newPlayers));
    setMessage("Guardado correctamente!!!");
    setName("");
    setScore(0);
    setTimeout(() => {
      navigate("/ranking");
    }, 1000);
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
          h="30px"
          lineHeight="30px"
          color="#eee"
          p="2px"
          fontSize="14px"
          className="input"
          type="text"
          value={name}
          placeholder="Enter a name..."
          onChange={handleChange}
        ></Input>
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
            onClick={handleSubmit}
          >
            Guardar
          </Button>
          <CustomButton text="Volver Inicio" to="/" />
        </Box>
      </Box>
      <Text h="50px" color="#eee" fontSize="18px">
        {message}
      </Text>
    </Box>
  );
};

export default EndGame;
