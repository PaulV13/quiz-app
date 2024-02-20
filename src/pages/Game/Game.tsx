import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { useGameStore } from "../../store/store";
import { Question } from "../../types";

const Game = () => {
  const questions = useGameStore((state) => state.questions);
  const score = useGameStore((state) => state.score);
  const increaseScore = useGameStore((state) => state.increaseScore);

  const [intervalId, setIntervalId] = useState(0);
  const [timeoutId, setTimeoutId] = useState(0);
  const [time, setTime] = useState(10);
  const [questionsRandoms, setQuestionRandoms] = useState<Question[]>([]);
  const [question, setQuestion] = useState<Question | null>(null);
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [userResponse, setUserResponse] = useState<number | null>(null);

  let navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    var questionAleatorias = questions.sort(() => {
      return Math.random() - 0.5;
    });
    setQuestionRandoms(questionAleatorias);
    setQuestion(questionAleatorias[0]);
  }, []);

  useEffect(() => {
    if (time === 0) {
      result();
    }
  }, [time]);

  useEffect(() => {
    if (numberQuestion === 11) {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      navigate("/endgame");
    }
  }, [numberQuestion]);

  const result = () => {
    const timeoutId = setTimeout(() => {
      setUserResponse(null);
      setTime(10);
      setQuestion(questionsRandoms[numberQuestion]);
      setNumberQuestion((numberQuestion) => numberQuestion + 1);
    }, 1000);
    setTimeoutId(timeoutId);
  };

  const handleAnswer = (ans: number) => {
    setUserResponse(ans);
    if (ans === question?.correct) {
      increaseScore(time);
    }
    result();
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        backgroundColor="#333"
        w="126px"
        h="126px"
        m={6}
        borderRadius="50%"
        border="4px solid"
        position="relative"
        overflow="hidden"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="absolute"
          bottom="0px"
          backgroundColor={time > 4 ? "green" : "red"}
          w="120px"
          h={`${time * 12}px`}
          transition={`height 1s`}
        />
        <Text
          textAlign="center"
          w="30px"
          fontWeight="bold"
          fontSize="22px"
          color="#eee"
          zIndex="3"
        >
          {time}
        </Text>
      </Box>
      {question ? (
        <Text textAlign="center" color="#eee" fontSize="18px" m={4}>
          {question.text}
        </Text>
      ) : null}

      {question
        ? question.answers.map((ans, index) => {
            return (
              <Box
                width={400}
                p="10px"
                m="10px 0"
                background={
                  userResponse !== null && index === question.correct
                    ? "green"
                    : userResponse === index
                    ? "red"
                    : "#eee"
                }
                cursor="pointer"
                textAlign="center"
                borderRadius="4px"
                border="4px solid #555"
                key={index}
                onClick={() => handleAnswer(index)}
              >
                {ans}
              </Box>
            );
          })
        : null}

      <Text m={2} color="#eee" fontSize="18px" fontWeight="bold">
        Puntaje: {score}
      </Text>
      <Text m={2} color="#eee" fontSize="18px" fontWeight="bold">
        Preguntas: {numberQuestion}/10
      </Text>
    </Box>
  );
};

export default Game;
