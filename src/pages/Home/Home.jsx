import { useEffect } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Box, Text } from "@chakra-ui/react";

const Home = () => {
  useEffect(() => {
    window.localStorage.setItem("starting", false);
    window.localStorage.setItem("score", 0);
  }, []);

  return (
    <Box
      h="250px"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Text textAlign="center" color="#eee" fontSize="28px">
        QUIZ APP
      </Text>
      <Box>
        <CustomButton text="Start Game" to="/game" />
        <CustomButton text="Ranking" to="/ranking" />
      </Box>
    </Box>
  );
};

export default Home;
