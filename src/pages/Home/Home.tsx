import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton/CustomButton";

const Home = () => {
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
